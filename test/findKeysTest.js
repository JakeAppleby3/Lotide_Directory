const assert = require('chai').assert;
const findKey = require('../findKey');

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3);

describe('#findKeys', () => {
  it('find key with 1 star and string taht says akaleri', () => {
    assert.strictEqual(result1, "Akaleri");

  });

});

// console.log(assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 1), "Akaleri"))