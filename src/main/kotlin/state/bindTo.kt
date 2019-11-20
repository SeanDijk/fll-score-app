package state

import kotlinx.html.InputType
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSpanElement

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
