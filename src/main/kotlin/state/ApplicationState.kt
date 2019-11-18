package state

import mission.CheckBoxMissionPart
import mission.Mission

object ApplicationState {

    val missions: LinkedHashMap<String, Mission> = linkedStringMapOf(
        Pair("M01", Mission("M01","M01 - Test", "Dit is een test", CheckBoxMissionPart("Check this!", 20)))
    )



}