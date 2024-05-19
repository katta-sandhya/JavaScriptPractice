const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "\n";
}
console.log(text);


const cars1 = ["BMW", "Volvo", "Saab", "Ford"];

let i1 = 0;
let len1 = cars.length;
let text1 = "";

for (; i1 < len; ) {
  text1 += cars[i] + "\n";
  i1++;
}
console.log(text);


var x = 5;

for (var x = 0; x < 10; x++) {
  // some code
}
console.log(x);
// Here i is 1

let y = 5;

for (let y = 0; y < 10; y++) {
  // some code
}
console.log(y);
