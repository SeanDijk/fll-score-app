package mission

import factory.HtmlFactory.createFor
import kotlinx.html.dom.append
import kotlinx.serialization.ImplicitReflectionSerializer
import kotlinx.serialization.json.Json
import serialization.PolyModules
import util.FileUtil
import kotlin.browser.document
import kotlin.browser.window

@UseExperimental(ImplicitReflectionSerializer::class)
fun main(args: Array<String>) {
    println("Hello JavaScript!")
    val json = Json(context = PolyModules.missionPart)
    window.onload = {
        val missionsSection = document.getElementById("missions")
        missionsSection?.append {
            FileUtil.loadJSON("defaultChallenges/my-test-template.json") {
                createFor(json.parse(Challenge.serializer(), JSON.stringify(it)))
            }
        }
    }
}
