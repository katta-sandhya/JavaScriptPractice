function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function operate(a, b, operation) {//here operation is a function passed as an argument
    return operation(a, b);
}

console.log(operate(5, 3, add)); // Output: 8 (5 + 3)
console.log(operate(5, 3, subtract)); // Output: 2 (5 - 3)
