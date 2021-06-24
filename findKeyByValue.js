const assertEqual = function (actual, expected) {
  let p = 'Passed';
  let f = 'Failed';
  if (actual == expected) {
    console.log(`The function has ${p} ✅`);
  } else {
    console.log(`The function has ${f} 🔻`);
  }
};


// function takes in an object and and a value. 
// should scan the object and retrurn the first key 
// if no key return undefined

const findKeyByValue = function (object, value) {
  // declaring keysArrays as a variable and scan through the object to return the first key
  const keysArrays = Object.keys(object);
  // use a for loop to go through each key in the object. Dat
  for (let data of keysArrays) {
    // if the object data is equal to the value parameter (e.g. sci-fi and "the Expanse");
    if(object[data] === value) {
      // bring the data back to the function keysArrays
      return data;
    }
  }
  // print to the console the data that we returned to keysArrays
  console.log(keysArrays);
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);