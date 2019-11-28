package mission

import kotlinx.serialization.Serializable

@Serializable
data class Image(val path: String, val description: String) {
}