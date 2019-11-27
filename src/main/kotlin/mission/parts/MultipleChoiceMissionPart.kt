package mission.parts

import kotlinx.serialization.*
import mission.MissionPart
import serialization.HelperHolder
import serialization.SerializationHelper
import state.State
import state.StateSerializer

@Serializable
@SerialName("MultipleChoice")
class MultipleChoiceMissionPart(val description: String,
                                val choices: List<Choice>
                                ): MissionPart {
    override fun getScore() = score
    var score = State(0)
    var selectedIndex = State(0)

    init {
        selectedIndex.observe { previous, new ->
            score.update(choices[new].score)
        }
    }

    @Serializable
    data class Choice(val choice: String, val score: Int)

    @Serializer(forClass = MultipleChoiceMissionPart::class)
    companion object : KSerializer<MultipleChoiceMissionPart> {
        private val helper = SerializationHelper(
            MultipleChoiceMissionPart::class,
            hashMapOf(
                0 to HelperHolder<MultipleChoiceMissionPart, Any>("description", String.serializer()) { it.description },
                1 to HelperHolder<MultipleChoiceMissionPart, Any>("choices", Choice.serializer().list) { it.choices },
                2 to HelperHolder<MultipleChoiceMissionPart, Any>("selectedIndex", StateSerializer(Int.serializer())) { it.selectedIndex },
                3 to HelperHolder<MultipleChoiceMissionPart, Any>("score", StateSerializer(Int.serializer())) { it.score }
            )
        ) {
            MultipleChoiceMissionPart(
                it["description"] as String,
                it["choices"] as List<Choice>
            ).apply {
                it["selectedIndex"]?.unsafeCast<State<Int>>()?.let { state ->
                    this.selectedIndex.update(state.getCurrentState())
                }
                it["score"]?.unsafeCast<State<Int>>()?.let{ state ->
                    this.score.update(state.getCurrentState())
                }
            }

        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: MultipleChoiceMissionPart) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }
}