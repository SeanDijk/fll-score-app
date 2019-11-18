package mission

import state.State

interface MissionPart {

    fun getScore(): State<Int>
}