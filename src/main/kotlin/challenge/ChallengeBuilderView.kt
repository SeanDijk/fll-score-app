package challenge

import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.onClickFunction
import mission.Mission
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event

class ChallengeBuilderView {
    lateinit var outerDiv: HTMLDivElement;
    val missionSection: HTMLDivElement by lazy { outerDiv.querySelector("#newMissions") as HTMLDivElement}

    fun create(tagConsumer: TagConsumer<HTMLElement>){
        outerDiv = tagConsumer.div("flex-column") {
            h1 { +"Builder" }

            div("flex-row") {
                label { +"Name: " }
                textInput { }
            }
            div("flex-column") {
                id = "newMissions"
                h2 { +"Missions: " }
            }
            button {
                +"Add mission"
                onClickFunction = createNewMission()
            }
        } as HTMLDivElement
    }

    private fun createNewMission(): (Event) -> Unit {
        return {
            missionSection.append {
                MissionBuilderView().create(this)
            }
        }
    }

    class MissionBuilderView{
        fun create(tagConsumer: TagConsumer<HTMLElement>) {
            tagConsumer.div("flex-column") {
                div("flex-row") {
                    label { + "Name: " }
                    textInput {  }
                }
                div("flex-row") {
                    label { + "Description: " }
                    textInput {  }
                }
                div{

                }
            }
        }
    }

//    fun addMission(): Map.Entry<String, Mission>{
//         val key = generateNewKey();
//
//        viewModel.
//
//
//
//    }
//
//
//    fun generateNewKey(): String{
//        var generatedKey = ""
//        while (viewModel.missionMap.containsKey(generatedKey)){
//            generatedKey = "" //generate new key
//        }
//        return generatedKey;
//    }


}