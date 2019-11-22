package state

import kotlinx.serialization.*
import kotlinx.serialization.internal.SerialClassDescImpl
import kotlinx.serialization.internal.StringDescriptor

@Serializable(with = StateSerializer::class)
class State<T : Any>(private var state: T) {
    @Transient
    private val observers: MutableList<Observer<T>> = mutableListOf()

    fun update(newState: T) {
        //todo maybe do this async
        for (it in observers) {
            it(state, newState)
        }
        state = newState
    }

    fun getCurrentState(): T {
        return state
    }

    fun observe(observer: Observer<T>) {
        observer(state, state)
        observers.add(observer)
    }
}

@Serializer(forClass = State::class)
class StateSerializer<T: Any> (private val serializer: KSerializer<T>) : KSerializer<State<T>> {
    override val descriptor: SerialDescriptor = StringDescriptor.withName("State")

    override fun serialize(encoder: Encoder, obj: State<T>) {
        encoder.encodeSerializableValue(serializer, obj.getCurrentState())
    }

    override fun deserialize(decoder: Decoder): State<T> {
        return State(decoder.decodeSerializableValue(serializer))
    }
}