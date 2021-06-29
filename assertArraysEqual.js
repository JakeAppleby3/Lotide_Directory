const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let p = 'Passed';
  let f = 'Failed';
  if(eqArrays(arrayOne, arrayTwo)) {
    console.log(`The function has ${p} ✅`);
    } else {
    console.log(`The function has ${f} 🔻`);
    }
};
module.exports = assertArraysEqual;