package mission

import kotlinx.serialization.*
import kotlinx.serialization.internal.SerialClassDescImpl
import kotlinx.serialization.json.Json
import serialization.HelperHolder
import serialization.SerializationHelper
import state.Observer
import state.State
import state.StateSerializer

@Serializable
class Mission(val name: String,
              val description: String,
              val missionParts: List<MissionPart>) {
    val totalScore: State<Int> = State(0)

    init {
        missionParts.forEach {
            it.getScore().observe { previous, new -> totalScore.update(totalScore.getCurrentState() + new - previous) }
        }
    }

    @Serializer(forClass = Mission::class)
    companion object : KSerializer<Mission> {
        private val helper = SerializationHelper(
            Mission::class,
            hashMapOf(
                0 to HelperHolder<Mission, Any>("name", String.serializer()) { it.name },
                1 to HelperHolder<Mission, Any>("description", String.serializer()) { it.description },
                2 to HelperHolder<Mission, Any>("missionParts", PolymorphicSerializer(MissionPart::class).list) { it.missionParts },
                3 to HelperHolder<Mission, Any>("totalScore", StateSerializer(Int.serializer())) { it.totalScore }
            )
        ) {
            Mission(
                it["name"] as String,
                it["description"] as String,
                it["missionParts"] as List<MissionPart>
            ).apply {
                this.totalScore.update(
                    (it["totalScore"] as State<Int>).getCurrentState()
                )
            }
        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: Mission) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }
}