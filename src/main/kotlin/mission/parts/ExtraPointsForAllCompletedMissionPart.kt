package mission.parts

import mission.Mission
import mission.MissionPart
import state.State

class ExtraPointsForAllCompletedMissionPart(val description: String,
                                            val scorePerCompletion: Int,
                                            val myMission: Mission,
                                            val missions: List<Mission>) : MissionPart {
    override fun getScore(): State<Int> = score
    val score = State(0)
    private var backingScore = 0
    var completed = State(false)

    init {
        completed.observe { previous, new ->
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
            it.totalScore.observe { previous, new ->
                if (previous == 0 && new > 0) {
                    backingScore += scorePerCompletion
                } else if (previous > 0 && new == 0) {
                    backingScore -= scorePerCompletion
                }
            }
        }
    }
}