package mission.parts

import kotlinx.serialization.Serializable
import mission.MissionPart
import state.State

@Serializable
class SliderMissionPart(val description: String,
                        val min: Int,
                        val max: Int,
                        val scoreMap: Map<Int, Int>) : MissionPart {
    override fun getScore() = score

    constructor(description: String, min: Int, max: Int, calculateScore: (Int) -> Int) :
            this(description, min, max,
                (min..max).asSequence()
                    .map { Pair(it, calculateScore(it)) }
                    .toMap()
            )

    var value = State(min)
    var score = State(scoreMap[min] ?: error("Invalid value given to get score: $min"))
    init {
        value.observe { _, new ->
            println("Value set to $new")
            score.update(scoreMap[new] ?: error("Invalid value given to get score: $new"))
        }
    }
}