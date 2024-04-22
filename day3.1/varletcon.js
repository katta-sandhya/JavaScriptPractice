// Using var for variables with function scope or global scope
var globalVar = "I'm a global variable";

function exampleFunction() {
    var localVar = "I'm a local variable";
    console.log(localVar); // Output: I'm a local variable
}

console.log(globalVar); // Output: I'm a global variable
// console.log(localVar); // This would throw an error, localVar is not accessible here

// Using let and const for block-scoped variables
{
    let blockScopedVar = "I'm a block-scoped variable";
    const PI = 3.14;
    console.log(blockScopedVar); // Output: I'm a block-scoped variable
    console.log(PI); // Output: 3.14
}

// console.log(blockScopedVar); // This would throw an error, blockScopedVar is not accessible here
// PI = 3.14159; // This would throw an error, you can't reassign a const variable
