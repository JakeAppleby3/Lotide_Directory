const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log('passed ✅');
  } else {
    console.log('failed 🔻');
  } 
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");