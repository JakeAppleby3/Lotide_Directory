const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let p = 'Passed';
  let f = 'Failed';
  // take in two arrays and console.log an apprpraite message to console
  // use message from assertEqual
  if(eqArrays(arrayOne, arrayTwo)) {
    console.log(`The function has ${p} ✅`);
    } else {
    console.log(`The function has ${f} 🔻`);
    }
};
module.exports = assertArraysEqual;