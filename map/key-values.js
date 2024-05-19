// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // List all values
  let text = "";
  for (const x of fruits.keys()) {//keys
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
  for (const x of fruits.values()) {//values
    text1 += x + "\n";
  }
  console.log(text1);

