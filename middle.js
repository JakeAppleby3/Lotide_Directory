const middle = function (array) {
  if(array.length <= 2) {
    return [];
  }
  let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return array.slice(middleIndex -1, middleIndex +1);
    }
    else {
      return [array[middleIndex]]
    }
};
module.exports = middle;