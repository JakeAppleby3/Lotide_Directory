const eqArrays = function (actual, expected) {
  for(var i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;