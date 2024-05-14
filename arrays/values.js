const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruits.values();//values()

// List the Values
let text = "";
for (let x of list) {
    text += x + `\n`;
}
console.log(text);
console.log(fruits.valueOf());