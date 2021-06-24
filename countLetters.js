const assertEqual = function (actual, expected) {
  let p = 'Passed';
  let f = 'Failed';
  if (actual == expected) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
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
const eqArrays = function (actual, expected) {
  // Loop through each array to check if it matches the opposing array's index values
  // We want to ensure that we checked every item
  for (var i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// Function should take in a sentence as a string and return a count of each letters in the sentence. 
// ie. L should appear twice R shoul appear three times
// // {
// l: 1,
//   i: 2,
//     g: 1,
//       h: 4,
//         t: 2,
//           o: 2,
//             u: 2,
//               s: 2,
//                 e: 3,
//                   n: 1,
// }

const countLetters = function(sentence) {
  // variable to store object
  let output = {};
  // for..of loop to go through each letter of the string.
  for (var letter of sentence) {
    // console.log(letter)
    // declaring varable to determine the letter count

    // if statement to find that each letter is truthy
    if (output[letter]) {
      // adding to the count of the element
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }

  }
  console.log(output);
  // return statement to get the  final output
  return output;
}
assertEqual(countLetters("lighthouse in the house")['s'], (2))
assertArraysEqual(Object.values(countLetters("lighthouse in the house")), [1, 2, 1, 4, 2, 2, 2, 2, 3, 3, 1])