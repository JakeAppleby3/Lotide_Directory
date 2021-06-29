const takeUntil = function (array, callback) {
  const result = [];
  for(let num of array) {
    const flag = callback(num);
    if (flag === false) {
      result.push(num);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;
