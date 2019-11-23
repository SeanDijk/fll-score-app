package mission

import kotlinx.serialization.*
import serialization.HelperHolder
import serialization.SerializationHelper
import state.State
import state.StateSerializer

@Serializable
class Challenge(
    val name: String,
    val missions: List<Mission>
) {
    val totalChallengeScore = State(0)

    init {
        missions.forEach {
            it.totalScore.observe { previous, new ->
                totalChallengeScore.update(totalChallengeScore.getCurrentState() + new - previous)
            }
        }
    }

    @Serializer(forClass = Challenge::class)
    companion object : KSerializer<Challenge> {
        private val helper = SerializationHelper(
            Challenge::class,
            hashMapOf(
                0 to HelperHolder<Challenge, Any>("name", String.serializer()) { it.name },
                1 to HelperHolder<Challenge, Any>("missions", Mission.serializer().list) { it.missions },
                2 to HelperHolder<Challenge, Any>("totalChallengeScore", StateSerializer(Int.serializer())) { it.totalChallengeScore }
            )
        ) {
            Challenge(
                it["name"] as String,
                it["missions"] as List<Mission>
            ).apply {
                this.totalChallengeScore.update(
                    (it["totalChallengeScore"] as State<Int>).getCurrentState()
                )
            }
        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: Challenge) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }
}