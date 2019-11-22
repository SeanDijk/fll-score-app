package serialization

import kotlinx.serialization.*
import kotlinx.serialization.internal.IntSerializer
import kotlinx.serialization.internal.StringDescriptor
import kotlinx.serialization.internal.StringSerializer

@Serializer(forClass = Map::class)
object MapIntIntSerializer : KSerializer<Map<Int, Int>> {
    private val serializer = (StringSerializer to IntSerializer).map
    override val descriptor: SerialDescriptor = StringDescriptor.withName("Map")
    override fun serialize(encoder: Encoder, obj: Map<Int, Int>) {
        val convertedMap = obj.mapKeys { it.key.toString() }
        encoder.encodeSerializableValue(serializer, convertedMap)

    }
    override fun deserialize(decoder: Decoder): Map<Int, Int> {
        return decoder.decodeSerializableValue(serializer).mapKeys { it.key.toInt() }
    }
}