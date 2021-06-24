

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

// function is meant to return all the indexes zero based functions in the string where the chacters are found 
// instead of returning one number each time the lettr was printed in the string, use mutiple numbers to represent all the places that they show up at
const letterPositions = function (sentence) {
  // variable to put the final contents into the object
  const results = {};
  // for-loop to iterate through each individual element
  for(var i = 0; i < sentence.length; i ++) {
    // checking to see if the statement is truthy and for each element in the string 
    // if(results[sentence[i]]) {
    //   // push the items in the results object
    //   results[sentence[i]].push(i);
    //   // get the index number of each letter
    // } else {
    //   results[sentence[i]] = [i]
    // }
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i]
  }

  console.log(results);
  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("hello");