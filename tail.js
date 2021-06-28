const tail = function tail(l) {
  return l.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;