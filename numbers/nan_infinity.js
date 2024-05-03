const x = 100 / "Apple";
const y = 100/"10";
const z = NaN;
const a = 5;
const b = "6";
const c = 2/0;//infinity
const d = -2/0;
console.log(x);
console.log(isNaN(x));
console.log(y);
console.log(z+a);//If you use NaN in a mathematical operation, the result will also be NaN
console.log(z+b);
console.log(typeof NaN);
console.log(c);
console.log(d);
console.log(typeof Infinity);



