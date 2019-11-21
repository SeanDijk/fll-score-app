package state

import kotlinx.html.InputType
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSpanElement
import org.w3c.dom.events.Event

fun HTMLElement.whenConditionIsMet(condition: (event: Event) -> Boolean): HTMLElement {
    val oldOnChange = this.onchange ?: throw RuntimeException("There is no onchange method set!")
    this.onchange = { event ->
        if (condition(event)) {
            oldOnChange(event)
        }
    }
    return this
}


inline fun <reified T> HTMLSpanElement.bindTo(state: State<T>): HTMLSpanElement {
    state.observe { _, new ->
        this.innerText = new.toString()
    }
    return this
}

inline fun <reified T> HTMLInputElement.bindTo(state: State<T>): HTMLInputElement {
    if (this.type == InputType.checkBox.realValue && T::class == Boolean::class) {
        return bindToInputCheckBox(state.unsafeCast<State<Boolean>>())
    } else if (this.type == InputType.range.realValue && T::class == Int::class) {
        return bindToInputRange(state.unsafeCast<State<Int>>())
    } else if (this.type == "todo" && T::class == Int::class) {
        return bindToInputTextField(state, {s -> s.toInt() as T }, { t -> t.toString()})
    } else if (this.type == "todo" && T::class == String::class) {
        return bindToInputTextField(state, {s -> s as T }, { t -> t.toString()})
    }
    return this
}

fun HTMLInputElement.bindToInputRange(state: State<Int>): HTMLInputElement {
    this.onchange = { event ->
        if (event.isTrusted) {
            state.update(value.toInt())
        }
    }
    state.observe { _, new ->
        value = new.toString()
    }
    return this
}

fun HTMLInputElement.bindToInputCheckBox(state: State<Boolean>): HTMLInputElement {
    this.onchange = { event ->
        if (event.isTrusted) {
            state.update(checked)
        }
    }
    state.observe { _, new ->
        checked = new
    }
    return this
}

fun <T> HTMLInputElement.bindToInputTextField(state: State<T>, stringToT: (String) -> T, stringFromT: (T) -> String): HTMLInputElement {
    this.onchange = { event ->
        if (event.isTrusted) {
            state.update(stringToT(value))
        }
    }
    state.observe { _, new ->
        value = stringFromT(new)
    }
    return this
}