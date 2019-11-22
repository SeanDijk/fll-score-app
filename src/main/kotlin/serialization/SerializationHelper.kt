package serialization

import kotlinx.serialization.*
import kotlinx.serialization.internal.SerialClassDescImpl
import kotlin.reflect.KClass

/**
 * Makes the serialization easier.
 */
class SerializationHelper<T: Any>(
    clazz: KClass<T>,
    val map: HashMap<Int, HelperHolder<T, Any>>,
    val creator: (Map<String, Any>) -> T): KSerializer<T> {

    override val descriptor: SerialDescriptor = object : SerialClassDescImpl(""+clazz.simpleName) {
        init {
            map.forEach {
                addElement(it.value.name)
            }
        }
    }

    override fun serialize(encoder: Encoder, obj: T) {
        encoder.beginStructure(descriptor).apply {
            map.forEach {
                encodeSerializableElement(descriptor, it.key, it.value.serializer, it.value.getter(obj))
            }
            endStructure(descriptor)
        }
    }

    override fun deserialize(decoder: Decoder): T {
        val resultMap = mutableMapOf<String, Any>()
        decoder.beginStructure(descriptor).apply {
            loop@ while (true) {
                when (val i = decodeElementIndex(descriptor)) {
                    CompositeDecoder.READ_DONE -> break@loop
                    else ->  {
                        val x = map[i] ?: throw SerializationException("Unknown index $i")
                        resultMap[x.name] = decodeSerializableElement(descriptor, i, x.serializer)!!
                    }
                }
            }
            endStructure(descriptor)
        }
        return creator(resultMap)
    }
}

/**
 * Holds data and helps hacking around the generics
 */
class HelperHolder<T: Any, Y: Any>(
    val name: String,
    serializer: KSerializer<out Y>,
    val getter: (T) -> Any
) {
    val serializer: KSerializer<in Any> = object : KSerializer<Any> {
        override fun deserialize(decoder: Decoder): Any {
            return serializer.deserialize(decoder)
        }

        override val descriptor=serializer.descriptor

        override fun serialize(encoder: Encoder, obj: Any) {
            (serializer as KSerializer<Y>).serialize(encoder, obj as Y)
        }

    }
}