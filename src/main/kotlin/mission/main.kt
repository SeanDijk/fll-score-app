package mission

import factory.HtmlFactory.createFor
import kotlinx.html.InputType
import kotlinx.html.dom.append
import kotlinx.html.js.br
import kotlinx.html.js.div
import kotlinx.html.js.input
import kotlinx.html.js.span
import mission.parts.CheckBoxMissionPart
import mission.parts.SliderMissionPart
import state.bindTo
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    println("Hello JavaScript!")
    val part = CheckBoxMissionPart("Description 1", 100)
    val part2 = CheckBoxMissionPart("Description 2", 25)
    val part3 = SliderMissionPart("Description 3", 0, 6) { it *10 }

    val mission = Mission("M01", "Mission 01", "This is the description of mission one",  part, part2, part3)
    window.onload = {

        val missionsSection = document.getElementById("missions")
//
//        State.missions.forEach {
//            missionsSection!!.appendChild(HtmlFactory.createFor(it.value))
//        }
        val missionPart = CheckBoxMissionPart("Hello world!", 20)

        missionsSection?.append {
            div("flex-column") {
                div("flex-row mission-header") {
                    span { +mission.name}
                    span {  }.bindTo(mission.totalScore)
                }
                mission.missionParts.forEach {
                    createFor(it)
                }
            }
        }
    }
}
