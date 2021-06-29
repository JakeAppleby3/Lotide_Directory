const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns {} in replace of '' ", () => {
    const input = '';
    const expect = {};
    assert.deepEqual(countLetters(input), expect);
  });
});