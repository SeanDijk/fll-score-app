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
    if(this.type == InputType.checkBox.realValue && T::class == Boolean::class) {
        this.onchange = {event ->
            if(event.isTrusted) {
                state.update(checked as T)
            }
        }
        state.observe { _, new ->
            checked = new as Boolean
        }
    }
    return this
}