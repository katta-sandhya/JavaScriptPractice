let x = 123;
let y = new Number(123);//numbers can also be defined as objects with the keyword new
let z = new Number(123);
console.log(x==y);
console.log(x===y);
console.log(y==z);
console.log(y===z);
console.log(typeof(y));
console.log(typeof(x));
const a = {name:"ram"};
const b = {name:"ram"};
console.log(a===b);
