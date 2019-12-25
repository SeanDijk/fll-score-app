package mission

import kotlinx.serialization.*
import serialization.HelperHolder
import serialization.SerializationHelper
import state.State
import state.StateSerializer

@Serializable
class Mission(val id: String,
              val name: String,
              val description: String = "",
              val images: List<Image> = ArrayList(),
              val missionParts: List<MissionPart>) {
    val totalScore: State<Int> = State(0)

    init {
        missionParts.forEach {
            it.getScore().observe { previous, new -> totalScore.update(totalScore.getCurrentState() + new - previous) }
        }
    }

    @Serializer(forClass = Mission::class)
    companion object : KSerializer<Mission> {
        private val helper = SerializationHelper(
            Mission::class,
            hashMapOf(
                0 to HelperHolder<Mission, Any>("id", String.serializer()) { it.id },
                1 to HelperHolder<Mission, Any>("name", String.serializer()) { it.name },
                2 to HelperHolder<Mission, Any>("description", String.serializer()) { it.description },
                3 to HelperHolder<Mission, Any>("images", Image.serializer().list) { it.description },
                4 to HelperHolder<Mission, Any>("missionParts", PolymorphicSerializer(MissionPart::class).list) { it.missionParts },
                5 to HelperHolder<Mission, Any>("totalScore", StateSerializer(Int.serializer())) { it.totalScore }
            )
        ) {
            Mission(
                it["id"] as String,
                it["name"] as String,
                it["description"] as String,
                it["images"]?.unsafeCast<List<Image>>().orEmpty(),
                it["missionParts"] as List<MissionPart>
            ).apply {
                it["totalScore"]?.unsafeCast<State<Int>>()?.let { x ->
                    this.totalScore.update(x.getCurrentState())
                }
            }
        }

        override val descriptor: SerialDescriptor = helper.descriptor
        override fun serialize(encoder: Encoder, obj: Mission) { helper.serialize(encoder, obj) }
        override fun deserialize(decoder: Decoder) = helper.deserialize(decoder)
    }
}