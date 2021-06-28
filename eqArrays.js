const eqArrays = function (actual, expected) {
  // Loop through each array to check if it matches the opposing array's index values
  // We want to ensure that we checked every item
  for(var i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;