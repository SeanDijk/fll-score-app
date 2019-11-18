package mission

import state.State

class Mission(val id: String,
              val name: String,
              val description: String,
              vararg missionParts: MissionPart) {
    val missionParts: List<MissionPart> = missionParts.toList()
    val totalScore: State<Int> = State(0)

    init {
        missionParts.forEach {
            it.getScore().observe { previous, new -> totalScore.update(totalScore.getCurrentState() + new - previous) }
        }
    }

}