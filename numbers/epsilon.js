const a = 0.1 + 0.2;
const b = 0.3;

if (Math.abs(a - b) < Number.EPSILON) {// use Number.EPSILON to perform "safe" comparisons. For example, instead of (a === b), you might use Math.abs(a - b) < Number.EPSILON to check if a and b are approximately equal.
    console.log("a and b are approximately equal");
} else {
    console.log("a and b are not equal");
}
let x = Number.EPSILON;
console.log(x);
let y = 100;
const z = y.EPSILON;
console.log(z);
