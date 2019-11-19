package factory

import kotlinx.html.InputType
import kotlinx.html.TagConsumer
import kotlinx.html.js.input
import kotlinx.html.js.div
import kotlinx.html.js.span
import mission.CheckBoxMissionPart
import mission.Mission
import mission.MissionPart
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import state.bindTo


object HtmlFactory {

//    fun createFor(mission: Mission): HTMLDivElement {
//        return document.create.div("flex-column") {
//            id = mission.id
//            span { +mission.name }
//        }.apply {
////            mission.missionParts.forEachIndexed {
////            }
//        }
//    }

    fun TagConsumer<HTMLElement>.createFor(missionPart: MissionPart) {
        println(missionPart::class)
        println(CheckBoxMissionPart::class)
        println(CheckBoxMissionPart::class == missionPart::class)
        when(missionPart::class) {
            CheckBoxMissionPart::class -> createFor(missionPart as CheckBoxMissionPart)

            else -> throw RuntimeException("MissionPart type not implemented in factory: " + missionPart::class.js)
        }

    }

    private fun TagConsumer<HTMLElement>.createFor(missionPart: CheckBoxMissionPart) {
        div("flex-row mission-row") {
            span { +missionPart.description }
            input {
                type = InputType.checkBox
            }.bindTo(missionPart.completed)
        }
    }


}