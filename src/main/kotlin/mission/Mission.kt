package mission

class Mission(val missionId: String, val description: String) {


    val missionParts: List<MissionPart> = ArrayList()

    fun calculateScore(): Int {
        return missionParts.sumBy { it.getScore() }
    }
}