
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jakeappleby/lotide`

**Require it:**

`const _ = require('@jakeappleby/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(l)`: Function returns the first element of the array.
* `tail(l)`: Function returns the tail end of the functon.. the elements preceeding the head of the array.
* `middle(array)`: Function returns the middle element of the array.
* `assertEqual(actual, expected)`: Function distinguishes if two values are equal to each other.
* `eqArrays(actual, expected)`: Function distinguishes if the elements of two arrays are equal to each other.
* `assertArraysEqual(arrayOne, arrayTwo)`: Function distinguishes if two arrays are equal to each other.
* `letterPositions(sentence)`: Function returns all the indexes zero based functions in the string where the chacters are found.
* `eqObjects(object1, object2)`: Function to determine if the properties of the objects are equal.
* `takeUntil(array, callback)`: Functions returns the slice of the array with elements taken from the beginning.
* `findKey(objectOne, callback)`: Function to determine the correct key in an object.
* `findKeyByValue(object, value)`: Function to determine the value of a key in an object.
* `without(source, itemsToRemove)`: Function to determine if an array is without a element.
* `countOnly(source, it)`: Function returns certain values in an objects.
* `map(array, callback)`: Function returns mapped out values.
* `countLetters(sentence)`: Function returns a sentence as a string and return a count of each letters in the sentence.
* `assertObjectsEqual(object1, object2)`: Function determines if two objects are equal to eachother.


