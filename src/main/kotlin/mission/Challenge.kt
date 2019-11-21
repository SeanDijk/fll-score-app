package mission

class Challenge(
    val name: String,
    val missions: List<Mission>
) {

    companion object {
        fun fromConfiguration() {}
    }
}