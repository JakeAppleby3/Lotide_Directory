const assertEqual = function (actual, expected) {
  let p = 'Passed';
  let f = 'Failed';
  if (actual == expected) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
};

const eqArrays = function (rOne, rTwo) {
  // Loop through each array to check if it matches the opposing array's index values
  // We want to ensure that we checked every item
  if (rOne.length !== rTwo.length) {
    return false;
  }
  for (var i = 0; i < rOne.length; i++) {
    if (rOne[i] !== rTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let p = 'Passed';
  let f = 'Failed';
  // take in two arrays and console.log an apprpraite message to console
  // use message from assertEqual
  if(eqArrays(arrayOne, arrayTwo)) {
    console.log(`The function has ${p} ✅`);
    } else {
    console.log(`The function has ${f} 🔻`);
    }
};



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([3, 2, 1], [3, 1, 3]), false); // => should PASS
assertEqual(eqArrays(['3', '2', '1'], [3, 2, 1]), false); // => should PASS