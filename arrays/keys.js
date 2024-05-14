const fruits = ["Banana", "Orange", "Apple", "Mango"];
const list = fruits.keys();//key()-returns an Iterator object with the keys of an array.
// List the Entries
let text = "";
for (let x of list) {
  text += x + `\n`;
}
console.log(text);
