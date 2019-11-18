package mission

class CheckBoxMissionPart(val description: String, val completionScore: Int) : MissionPart {
    override fun getScore(): Int {
        return if (completed) completionScore else 0
    }

    var completed: Boolean = false;


}