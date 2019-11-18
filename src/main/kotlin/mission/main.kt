package mission

import kotlinx.html.InputType
import kotlinx.html.dom.append
import kotlinx.html.js.br
import kotlinx.html.js.input
import kotlinx.html.js.span
import state.bindTo
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    println("Hello JavaScript!")
    val part = CheckBoxMissionPart("", 100)
    val part2 = CheckBoxMissionPart("", 25)
    val part3 = CheckBoxMissionPart("", 50)

    val mission = Mission("", "", "",  part, part2, part3)
    window.onload = {

        val missionsSection = document.getElementById("missions")
//
//        State.missions.forEach {
//            missionsSection!!.appendChild(HtmlFactory.createFor(it.value))
//        }
        val missionPart = CheckBoxMissionPart("Hello world!", 20)

        missionsSection?.append {
            span {  }.apply { bindTo(mission.totalScore) }
            br {  }
        }
        mission.missionParts.forEach {
            it as CheckBoxMissionPart
            missionsSection!!.append {
                input {
                    type = InputType.checkBox
                }.apply { bindTo(it.completed) }
                span {  }.apply { bindTo(it.score) }
                br {  }
            }
        }


    }
}
