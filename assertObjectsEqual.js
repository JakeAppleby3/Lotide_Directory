
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }

    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require(`util`).inspect;
  if (actual !== true) {
    console.log(`The Assertion Failed ❌❌❌:  ${inspect(actual)} !== ${inspect(expected)}`);
    } else {
    console.log(`The Assertion Passed ✅✅✅: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), true); // => false