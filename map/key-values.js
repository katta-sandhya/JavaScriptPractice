// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // List all values
  let text = "";
  for (const x of fruits.keys()) {//keys() :returns an iterator object with the keys in a map.
    text += x + "\n";
  }
  console.log(text);

  // Create a Map
const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // List all values
  let text1 = "";
  for (const x of fruits.values()) {//values() :returns an iterator object with the values in a map.
    text1 += x + "\n";
  }
  console.log(text1);

