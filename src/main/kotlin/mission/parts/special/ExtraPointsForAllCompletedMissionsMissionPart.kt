package mission.parts.special

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import mission.Mission
import mission.MissionPart
import state.State

@Serializable
@SerialName("ExtraPointsForAllCompletedMissionsMissionPart")
class ExtraPointsForAllCompletedMissionsMissionPart(val description: String,
                                                    val scorePerCompletion: Int,
                                                    val exceptions: Map<String, Int> = HashMap()
) : MissionPart {
    override fun getScore(): State<Int> = score

    @Transient
    private lateinit var missions: List<Mission>
    @Transient
    private lateinit var myMission: Mission
    private val score = State(0)
    private var backingScore = 0

    var enabled = State(false)

    fun initialize(myMission: Mission, missions:List<Mission>){
        this.myMission = myMission
        this.missions = missions

        // Update the score if the enabled state is changed.
        enabled.observe { previous, new ->
            if (new) {
                score.update(backingScore)
            } else {
                score.update(0)
            }
        }

        missions.forEach {
            // We dont want to add the score for the mission this is part of.
            if(it == myMission)
                return@forEach

            // Update the backing score on change
            it.totalScore.observe { previous, new ->
                if (previous == 0 && new > 0) {
                    backingScore += getScoreForMission(it)
                } else if (previous > 0 && new == 0) {
                    backingScore -= getScoreForMission(it)
                }
                //If the current state is enabled, also update the shown score
                if(enabled.getCurrentState()) {
                    score.update(backingScore)
                }
            }
        }
    }

    private fun getScoreForMission(mission: Mission): Int{
        return exceptions.getOrElse(mission.id) { scorePerCompletion }
    }
}