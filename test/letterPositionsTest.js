const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns [1] from the letter e in (hello)', () => {
    const input = "hello";
    const expectedOutput = [1];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
});