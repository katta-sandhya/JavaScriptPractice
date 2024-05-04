const num = 5.56789;
const n = num.toExponential();
const a = num.toExponential(3);
const b = num.toFixed();
const c = num.toFixed(3);
console.log("toExponential()");//converts a number into an exponential notation.
console.log(n);
console.log(a);
console.log("toFixed()");//method converts a number to a string and rounds the string to a specified number of decimals.
console.log(b);
console.log(c);

