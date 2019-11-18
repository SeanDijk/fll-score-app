package state

typealias Observer<T> = (previous: T, new: T) -> Unit
