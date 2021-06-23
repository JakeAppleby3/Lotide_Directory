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

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let p = 'Passed';
  let f = 'Failed';
  // take in two arrays and console.log an apprpraite message to console
  // use message from assertEqual
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
};

// ACTUAL FUNCTION
const middle = function (array) {
  // finding the middle elemwnt in an array 
  // looping through eaching elemt in the array to find the middle elemnt 
  // even number return 
  if(array.length <= 2) {
    return [];
  }
  let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return array.slice(middleIndex -1, middleIndex +1);
    }
    else {
      return [array[middleIndex]]
    }
};





// TEST CODE
// ...
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]