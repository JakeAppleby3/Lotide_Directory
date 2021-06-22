const assertEqual = function (actual, expected) {
  let p = 'Passed';
  let f = 'Failed';
  if (actual == expected) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
};

const head = function head(l) {
  return l[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

