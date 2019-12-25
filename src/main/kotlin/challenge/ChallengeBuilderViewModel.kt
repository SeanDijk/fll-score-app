package challenge

import mission.Challenge
import mission.Mission
import state.State

class ChallengeBuilderViewModel {
    var challengeName: State<String> = State("")
    val missionMap:  Map<String, State<Mission>> = hashMapOf()





}