// Define a function that takes another function as an argument
function callFunc(func) {
    func();
}

// Define a function to be passed as an argument
function greet() {
    console.log("Hello, world!");
}

// Call the function and pass another function as an argument
callFunc(greet); // Output: Hello, world!
