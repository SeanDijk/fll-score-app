package mission.parts

import kotlinx.serialization.*
import mission.MissionPart
import serialization.HelperHolder
import serialization.MapIntIntSerializer
import serialization.SerializationHelper
import state.State
import state.StateSerializer

@Serializable
@SerialName("SliderMissionPart")
class SliderMissionPart(val description: String,
                        val min: Int,
                        val max: Int,
                        @Serializable(with=MapIntIntSerializer::class) val scoreMap: Map<Int, Int>) : MissionPart {
    override fun getScore() = score

    constructor(description: String, min: Int, max: Int, calculateScore: (Int) -> Int) :
            this(description, min, max,
                (min..max).asSequence()
                    .map { Pair(it, calculateScore(it)) }
                    .toMap()
            )

    var value = State(min)
    var score = State(scoreMap[min] ?: error("Invalid value given to get score: $min"))
    init {
        value.observe { _, new ->
            score.update(scoreMap[new] ?: error("Invalid value given to get score: $new"))
        }
    }

    @Serializer(forClass = SliderMissionPart::class)
    companion object : KSerializer<SliderMissionPart> {
        private val helper = SerializationHelper(
            SliderMissionPart::class,
            hashMapOf(
                0 to HelperHolder<SliderMissionPart, Any>("description", String.serializer()) { it.description },
                1 to HelperHolder<SliderMissionPart, Any>("min", Int.serializer()) { it.min },
                2 to HelperHolder<SliderMissionPart, Any>("max", Int.serializer()) { it.max },
                3 to HelperHolder<SliderMissionPart, Any>("scoreMap", MapIntIntSerializer) { it.scoreMap },
                4 to HelperHolder<SliderMissionPart, Any>("value", StateSerializer(Int.serializer())) { it.value },
                5 to HelperHolder<SliderMissionPart, Any>("score", StateSerializer(Int.serializer())) { it.score }
            )
        ) {
            SliderMissionPart(
                it["description"] as String,
                it["min"] as Int,
                it["max"] as Int,
                it["scoreMap"] as Map<Int, Int>
            ).apply {
                it["value"]?.unsafeCast<State<Int>>()?.let { state ->
                    this.value.update(state.getCurrentState())
                }
                it["score"]?.unsafeCast<State<Int>>()?.let{ state ->
                    this.score.update(state.getCurrentState())
                }
            }

        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: SliderMissionPart) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }

}