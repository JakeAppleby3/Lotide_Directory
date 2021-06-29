const countLetters = function(sentence) {
  let output = {};
  for (var letter of sentence) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters;