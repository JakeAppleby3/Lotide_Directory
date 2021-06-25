const assertEqual = function (actual, expected) {
  let p = 'Passed';
  let f = 'Failed';
  if (actual == expected) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
};


// function takes in a object and a callback 
// function should scan the object anf return the first key that reurns a truthy value
// if no key founf then should return undefined
const findKey = function (objectOne, callBack) {
  // for loop to scsan the object
  for(let key in objectOne) {
    // if statement to find truthy value
    if(callBack(objectOne[key])) {
      return key;
    }
  }
};




console.log(assertEqual(findKey({
    "Blue Hill": { stars : 1 },
    "Akaleri" : { stars : 3 },
     "noma" :    { stars : 2 },
     "elBulli" : { stars : 2 },
     "Akelarre": { stars : 3 }
}, x => x.stars === 1), "Akaleri"))
