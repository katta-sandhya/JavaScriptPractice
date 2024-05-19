const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  
  // Using for...of loop
  for (let [key, value] of fruits.entries()) {
    text += key + ' = ' + value + "\n";
  }
  
  console.log(text);
  