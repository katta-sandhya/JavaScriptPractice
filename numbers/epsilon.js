const a = 0.1 + 0.2;
const b = 0.3;

if (Math.abs(a + b) < Number.EPSILON) {
    console.log("a and b are approximately equal");
} else {
    console.log("a and b are not equal");
}
let x = Number.EPSILON;
console.log(x);
let y = 100;
const z = y.EPSILON;
console.log(z);
