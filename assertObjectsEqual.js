const assertObjectsEqual = function (actual, expected) {
  const inspect = require(`util`).inspect;
  if (actual !== true) {
    console.log(`The Assertion Failed ❌❌❌:  ${inspect(actual)} !== ${inspect(expected)}`);
    } else {
    console.log(`The Assertion Passed ✅✅✅: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;