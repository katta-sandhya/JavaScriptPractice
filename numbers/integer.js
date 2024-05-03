console.log("isInteger")//
console.log(Number.isInteger(123));
console.log(Number.isInteger(-123));
console.log(Number.isInteger('123'));
console.log("isSafeInteger")// method returns trueif a number is a safe integer.A safe integer integers from (253 - 1) to -(253 - 1).
console.log(Number.isSafeInteger(123));
console.log(Number.isSafeInteger(-123));
console.log(Number.isSafeInteger('123'));
console.log("MAX_SAFE_INTEGER");//represents the maximum safe integer in JavaScript.Number.MAX_SAFE_INTEGER is (2 power 53 - 1).
const x = Number.MAX_SAFE_INTEGER;
console.log(x);
console.log("MIN_SAFE_INTEGER");//represents the minimum safe integer in JavaScript.Number.MIN_SAFE_INTEGER is -(2 power 53 - 1).
const y = Number.MIN_SAFE_INTEGER;
console.log(y);

