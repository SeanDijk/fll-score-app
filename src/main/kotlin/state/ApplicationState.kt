package state

import mission.Mission
import mission.parts.CheckBoxMissionPart

object ApplicationState {

    val missions: LinkedHashMap<String, Mission> = linkedStringMapOf(
        Pair("M01", Mission("M01","M01 - Test", "Dit is een test", CheckBoxMissionPart("Check this!", 20)))
    )



}