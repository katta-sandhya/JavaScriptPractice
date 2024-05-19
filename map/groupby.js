// Create an Array
const fruits = ([
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ]);
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Map.groupBy (fruits, myCallback);
  // Display Results
let text ="These fruits are Ok: <br>";
for (let x of result.get("ok")) {
  text += x.name + " " + x.quantity + "<br>";
}
text += "<br>These fruits are low: <br>";
for (let x of result.get("low")) {
  text += x.name + " " + x.quantity + "<br>";
}
console.log(text);

console.log(result.get("ok"));
  