console.log("toLocaleString()");//returns a number as a string, using local language format
const num = 1000000;
const text = num.toLocaleString();
const text1 = num.toLocaleString("en-IN");
//Format a number into a currency string, using the locale specific of INDIA
let text2 = num.toLocaleString("en-IN", {style:"currency", currency:"INR"});
console.log(text);
console.log(text1);
console.log(text2);
console.log("toPrecision()");//formats a number to a specified length.
const a = 13.3714;
const n = a.toPrecision(2);
console.log(n);
//Format a small number:
const b  = 0.001658853;
console.log(b.toPrecision(2));
console.log(b.toPrecision(3));
console.log(b.toPrecision(10));