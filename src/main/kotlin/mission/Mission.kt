package mission

import kotlinx.serialization.*
import kotlinx.serialization.internal.SerialClassDescImpl
import kotlinx.serialization.json.Json
import state.State

//@Serializable
class Mission(val id: String,
              val name: String,
              val description: String,
              vararg missionParts: MissionPart) {
    val missionParts: List<MissionPart> = missionParts.toList()
    val totalScore: State<Int> = State(0)

    init {
        missionParts.forEach {
            it.getScore().observe { previous, new -> totalScore.update(totalScore.getCurrentState() + new - previous) }
        }
    }


//    @Serializer(forClass = Mission::class)
//    companion object : KSerializer<Mission> {
//
//        override fun serialize(encoder: Encoder, obj: Mission) {
//            Json.parse()
//        }
//
//        override fun deserialize(decoder: Decoder): Mission {
//
//        }
//    }
}