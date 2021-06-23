const assertEqual = function (actual, expected) {
  let p = 'Passed';
  let f = 'Failed';
  if (actual == expected) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

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
  console.log(output);
  return output;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);