package mission

import kotlinx.serialization.Serializable
import state.State

interface MissionPart {

    fun getScore(): State<Int>
}