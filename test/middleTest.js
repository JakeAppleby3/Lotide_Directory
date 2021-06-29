const assert = require('chai').assert
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

describe('#middle', () => {
  it("return the middle [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return the middle element of [1, 2]", () => {
    assert.deepEqual(middle([1, 2,]), []);
  });
  it("return the middle element of [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("return the middle element of [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("return the middle element of [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  }); 
  it("return the middle element of [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
});

// TEST CODE
// ...
// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []

// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
