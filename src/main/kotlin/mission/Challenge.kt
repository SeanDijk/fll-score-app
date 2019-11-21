package mission

import kotlinx.serialization.Serializable

//@Serializable
class Challenge(
    val name: String,
    val missions: List<Mission>
) {

    companion object {
        fun fromConfiguration() {}
    }
}