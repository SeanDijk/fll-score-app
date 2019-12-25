package factory

import kotlinx.html.InputType
import kotlinx.html.TagConsumer
import kotlinx.html.h1
import kotlinx.html.js.div
import kotlinx.html.js.input
import kotlinx.html.js.span
import kotlinx.html.label
import mission.Challenge
import mission.Mission
import mission.MissionPart
import mission.parts.CheckBoxMissionPart
import mission.parts.MultipleChoiceMissionPart
import mission.parts.special.ExtraPointsForAllCompletedMissionsMissionPart
import mission.parts.SliderMissionPart
import org.w3c.dom.HTMLElement
import state.bindTo


object HtmlFactory {

    fun TagConsumer<HTMLElement>.createFor(challenge: Challenge) {
        div("flex-column") {
            h1 { +challenge.name }
            challenge.missions.forEach {
                createFor(it)
            }
        }
    }


    fun TagConsumer<HTMLElement>.createFor(mission: Mission) {
        div("flex-column") {
            div("flex-row mission-header") {
                span { +mission.name }
                span { }.bindTo(mission.totalScore)
            }
            mission.missionParts.forEach {
                createFor(it)
            }
        }
    }

    fun TagConsumer<HTMLElement>.createFor(missionPart: MissionPart) {
        when (missionPart::class) {
            CheckBoxMissionPart::class -> createFor(missionPart as CheckBoxMissionPart)
            SliderMissionPart::class -> createFor(missionPart as SliderMissionPart)
            MultipleChoiceMissionPart::class -> createFor(missionPart as MultipleChoiceMissionPart)
            ExtraPointsForAllCompletedMissionsMissionPart::class -> createFor(missionPart as ExtraPointsForAllCompletedMissionsMissionPart)
            else -> throw RuntimeException("MissionPart type not implemented in HtmlFactory: " + missionPart::class)
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
//            div("flex-filler")
            div("flex-row") {
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
    }

    private fun TagConsumer<HTMLElement>.createFor(missionPart: MultipleChoiceMissionPart) {
        div("flex-row mission-row") {
            span { +missionPart.description }
            div("flex-column text-no-wrap") {
                missionPart.choices.forEachIndexed { i, item ->
                    val inputId = missionPart.hashCode().toString() + i.toString()
                    div {
                        input {
                            type = InputType.radio
                            name = missionPart.hashCode().toString()
                            value = i.toString()
                            checked = i == 0
                        }.apply {
                            id = inputId
                        }.bindTo(missionPart.selectedIndex)
                        label {
                            htmlFor =  inputId
                            +item.choice
                        }
                    }
                }
            }
        }
    }

    private fun TagConsumer<HTMLElement>.createFor(missionPart: ExtraPointsForAllCompletedMissionsMissionPart) {
        div("flex-row mission-row") {
            span { +missionPart.description }
            input {
                type = InputType.checkBox
            }.bindTo(missionPart.enabled)
        }
    }


}