const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const getTheFirstLetter = function (word) {
  return word.charAt(0);
}

const assertArraysEqual = function (actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    } else {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    }
  }
};

assertArraysEqual(map(words, getTheFirstLetter), ['g', 'c', 't', 'm', 't']);