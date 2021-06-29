const findKey = function (objectOne, callBack) {
  // for loop to scsan the object
  for(let key in objectOne) {
    // if statement to find truthy value
    if(callBack(objectOne[key])) {
      return key;
    }
  }
};

module.exports = findKey;
