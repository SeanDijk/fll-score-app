package mission.parts

import mission.MissionPart
import state.State

class SliderMissionPart(val description: String, private val completionScore: Int): MissionPart {
    override fun getScore() = score

//    var completed = State(false)
//    val score = State(0)
//
//    init {
//        completed.observe { previous, new ->
//            if (new) score.update(completionScore)
//            else score.update(0)
//        }
//    }

}