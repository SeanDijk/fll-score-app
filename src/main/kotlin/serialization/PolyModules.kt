package serialization

import kotlinx.serialization.modules.SerializersModule
import mission.MissionPart
import mission.parts.CheckBoxMissionPart
import mission.parts.MultipleChoiceMissionPart
import mission.parts.special.ExtraPointsForAllCompletedMissionsMissionPart
import mission.parts.SliderMissionPart

object PolyModules {
    val missionPart = SerializersModule {
        polymorphic(MissionPart::class) {
            CheckBoxMissionPart::class with CheckBoxMissionPart.serializer()
            SliderMissionPart::class with SliderMissionPart.serializer()
            MultipleChoiceMissionPart::class with MultipleChoiceMissionPart.serializer()
            ExtraPointsForAllCompletedMissionsMissionPart::class with ExtraPointsForAllCompletedMissionsMissionPart.serializer()
        }
    }
}