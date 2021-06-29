const letterPositions = function (sentence) {
  const results = {};
  for(var i = 0; i < sentence.length; i ++) {
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i]
  }
  return results;
};

module.exports = letterPositions;