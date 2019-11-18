package state

class State<T>(initialState: T){
    private var state: T = initialState
    private val observers: MutableList<Observer<T>> = mutableListOf()

    fun update(newState: T){
        //todo maybe do this async
        observers.forEach { it.invoke(state, newState) }
        state = newState
    }

    fun getCurrentState(): T {
        return state
    }

    fun observe(observer: Observer<T>){
        observer.invoke(getCurrentState(), getCurrentState())
        observers.add(observer)
    }
}