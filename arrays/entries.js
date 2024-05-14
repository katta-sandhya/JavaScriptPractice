const fruits = ["Banana", "Orange", "Apple", "Mango"];

// List the Entries
let text = "";
for (let [index, fruit] of fruits.entries()) {
  text += `${index}. ${fruit}\n`;
}
console.log(text);


