package com.algoexpert.program

fun sortedSquaredArray(array: List<Int>): List<Int> {
    // Write your code here.
    val sortedSquares = array.map() { _-> 0 }.toMutableList()
    
    for (idx in 0 until array.size) {
        val value = array[idx]
    sortedSquares[idx] = value * value
}
     sortedSquares.sort()
     return sortedSquares
}