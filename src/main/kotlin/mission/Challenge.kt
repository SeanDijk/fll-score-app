package mission

import kotlinx.serialization.*
import mission.parts.special.ExtraPointsForAllCompletedMissionsMissionPart
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
    // Counter for all missions where there are more than 0 points scored


    init {
        missions.forEach { mission ->
            mission.totalScore.observe { previous, new ->
                totalChallengeScore.update(totalChallengeScore.getCurrentState() + new - previous)
            }

            mission.missionParts.forEach { part ->
                if(part is ExtraPointsForAllCompletedMissionsMissionPart) {
                    part.initialize(mission, missions)
                }
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
                it["totalChallengeScore"]?.unsafeCast<State<Int>>()?.let { x ->
                    this.totalChallengeScore.update(x.getCurrentState())
                }
            }
        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: Challenge) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }
}