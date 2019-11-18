package factory

import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.injector.appendAndInject
import kotlinx.html.js.div
import kotlinx.html.span
import mission.CheckBoxMissionPart
import mission.Mission
import mission.MissionPart
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

object HtmlFactory {

    fun createFor(mission: Mission): HTMLDivElement {
        return document.create.div("flex-column") {
            id = mission.id
            span { +mission.name }
        }.apply {
//            mission.missionParts.forEachIndexed {
//            }
        }
    }

    fun createFor(missionPart: MissionPart): HTMLDivElement {
        when(missionPart::class.js) {
            CheckBoxMissionPart::class.js -> {
                return document.create.div {
                    +"CheckboxMissionPart"
                }
            }
        }

        throw RuntimeException("MissionPart type not implemented in factory: " + missionPart::class)
    }



}