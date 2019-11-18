package state

import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

class StateDelegate<R, T>(default: T): ReadOnlyProperty<R, State<T>> {

    private val state = State(default)

    override fun getValue(thisRef: R, property: KProperty<*>): State<T> {
        return state
    }
}