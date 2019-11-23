package mission.parts

import kotlinx.serialization.*
import kotlinx.serialization.internal.SerialClassDescImpl
import mission.MissionPart
import serialization.HelperHolder
import serialization.SerializationHelper
import state.State
import state.StateSerializer

@Serializable
@SerialName("CheckBoxMissionPart")
class CheckBoxMissionPart(val description: String, val completionScore: Int): MissionPart {
    override fun getScore() = score

    var completed = State(false)
    val score = State(0)

    init {
        completed.observe { _, new ->
            if (new) score.update(completionScore)
            else score.update(0)
        }
    }

    @Serializer(forClass = CheckBoxMissionPart::class)
    companion object : KSerializer<CheckBoxMissionPart> {
        private val helper = SerializationHelper(
            CheckBoxMissionPart::class,
            hashMapOf(
                0 to HelperHolder<CheckBoxMissionPart, Any>("description", String.serializer()) { it.description },
                1 to HelperHolder<CheckBoxMissionPart, Any>("completionScore", Int.serializer()) { it.completionScore },
                2 to HelperHolder<CheckBoxMissionPart, Any>("completed", StateSerializer(Boolean.serializer())) { it.completed },
                3 to HelperHolder<CheckBoxMissionPart, Any>("score", StateSerializer(Int.serializer())) { it.score }
            )
        ) {
            CheckBoxMissionPart(it["description"] as String, it["completionScore"] as Int).apply {
                val completed1 = (it["completed"] as State<Boolean>).getCurrentState()
                val score1 = (it["score"] as State<Int>).getCurrentState()
                this.completed.update(completed1)
                this.score.update(score1)
            }
        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: CheckBoxMissionPart) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }
}
