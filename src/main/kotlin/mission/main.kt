package mission

import factory.HtmlFactory
import factory.HtmlFactory.createFor
import kotlinx.html.InputType
import kotlinx.html.dom.append
import kotlinx.html.js.br
import kotlinx.html.js.div
import kotlinx.html.js.input
import kotlinx.html.js.span
import kotlinx.serialization.ImplicitReflectionSerializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonConfiguration
import kotlinx.serialization.serializer
import kotlinx.serialization.stringify
import mission.parts.CheckBoxMissionPart
import mission.parts.SliderMissionPart
import state.State
import state.StateSerializer
import state.bindTo
import kotlin.browser.document
import kotlin.browser.window

@UseExperimental(ImplicitReflectionSerializer::class)
fun main(args: Array<String>) {
    println("Hello JavaScript!")


    val part = CheckBoxMissionPart("Description 1", 100)
    val part2 = CheckBoxMissionPart("Description 2", 25)
    val part3 = SliderMissionPart("Description 3", 0, 6) { it *10 }

//    val jsonString = Json.stringify(CheckBoxMissionPart.serializer(), part2)
//    val jsonString1 = Json.stringify(SliderMissionPart.serializer(), part3)
//    println(jsonString)
//    println(jsonString1)
//    console.log("My object: ", Json.parse(CheckBoxMissionPart.serializer(), jsonString));
//    console.log("My object2: ", Json.parse(SliderMissionPart.serializer(), jsonString1));


    val mission = Mission("M01", "Mission 01", "This is the description of mission one",  part, part2, part3)

    window.onload = {
        val missionsSection = document.getElementById("missions")
        missionsSection?.append {
            createFor(mission)
        }
    }
}
