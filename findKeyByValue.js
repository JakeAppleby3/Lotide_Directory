const findKeyByValue = function (object, value) {
  const keysArrays = Object.keys(object);
  for (let data of keysArrays) {
    if(object[data] === value) {
      return data;
    }
  }
};

module.exports = findKeyByValue;