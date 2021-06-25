const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function (array, callback) {
  const result = [];
  for(let num of array) {
    const flag = callback(num);
    if (flag === false) {
      result.push(num);
    } else {
      return result;
    }
  }
  return result;
};
// slice of the array with elements taken from the beginning.

const assertArraysEqual = function (actual, expected) {
  if(actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    return;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
      return;
    } 
  }
  console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
};

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
