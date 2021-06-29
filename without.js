const without = function (source, itemsToRemove) {
let output = [...source];
  for(var i = 0; i < source.length; i++) {
    for(var j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        output.splice(i, 1);
      }
    }
  }
return output;
};

module.exports = without;