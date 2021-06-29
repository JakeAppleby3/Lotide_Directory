const countOnly = function (allItems, itemsToCount) {
  let output = {};
  for (var i = 0; i < allItems.length; i++) {
    let element = firstNames[i];
    if (itemsToCount[element] === true) {
      if(output[element]) {
        output[element] += 1;
      } else {
        output[element] = 1;
      }
    }
  }
  return output;
};

module.exports = countOnly;