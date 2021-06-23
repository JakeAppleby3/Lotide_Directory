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

const without = function (source, itemsToRemove) {
  // compare the two arrays to see if they have gotten 
let output = [...source];
  for(var i = 0; i < source.length; i++) {
    for(var j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        output.splice(i, 1);
      }
    }
  }
return output;
};



assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]