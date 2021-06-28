const assert = require('chai').assert;
const tail = require('../tail.js');
test = [1, 0, 1, 2, 3]

describe("#tail", ()=> {
  it("returns 4 from the number of elements in [1, 0, 1, 2, 3]", () => {
    assert.strictEqual(tail(test).length, 4);
  });
  it("returns 0 from the number of elements in [1, 0, 1, 2, 3]", () => {
    assert.strictEqual(tail(test)[0], 0);
  });
  it("returns 1 from the number of elements in [1, 0, 1, 2, 3]", () => {
    assert.strictEqual(tail(test)[1], 1);
  });
});



