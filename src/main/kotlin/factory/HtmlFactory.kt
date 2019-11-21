package factory

import kotlinx.html.InputType
import kotlinx.html.TagConsumer
import kotlinx.html.js.input
import kotlinx.html.js.div
import kotlinx.html.js.span
import mission.MissionPart
import mission.parts.CheckBoxMissionPart
import mission.parts.ExtraPointsForAllCompletedMissionPart
import mission.parts.SliderMissionPart
import org.w3c.dom.HTMLElement
import state.bindTo
import state.whenConditionIsMet


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
            SliderMissionPart::class -> createFor(missionPart as SliderMissionPart)
            else -> throw RuntimeException("MissionPart type not implemented in factory: " + missionPart::class)
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

    private fun TagConsumer<HTMLElement>.createFor(missionPart: SliderMissionPart) {
        div("flex-row mission-row") {
            span { +missionPart.description }
            div("flex-filler") {}
            input {
                type = InputType.number
                min = missionPart.min.toString()
                max = missionPart.max.toString()
                step = 1.toString()
            }.bindTo(missionPart.value)
            input {
                type = InputType.range
                min = missionPart.min.toString()
                max = missionPart.max.toString()
                step = 1.toString()
            }.bindTo(missionPart.value)
        }
    }

    private fun TagConsumer<HTMLElement>.createFor(missionPart: ExtraPointsForAllCompletedMissionPart) {
        div("flex-row mission-row") {
            span { +missionPart.description }
            input {
                type = InputType.checkBox
            }.bindTo(missionPart.completed)
        }
    }


}