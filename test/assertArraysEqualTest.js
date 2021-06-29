const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')


// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([3, 2, 1], [1, 2, 3]), false); // => should PASS
assertArraysEqual(eqArrays([3, 2, 1], [3, 1, 3]), false); // => should PASS
assertArraysEqual(eqArrays(['3', '2', '1'], [3, 2, 1]), false); // => should PASS