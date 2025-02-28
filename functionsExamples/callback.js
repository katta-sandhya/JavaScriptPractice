// Define a function that takes a callback
function greet(name, callback) {
  // Call the callback function with the greeting message
  callback("Hello, " + name + "!");
}

// Define a callback function
function callback(greeting) {
  console.log(greeting);
}

// Call the greet function with a callback
greet("katta", callback);

function processUserInput(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(name); // Invoke the callback function
}

// Callback function
function callback(userName) {
  console.log(`Thank you for visiting, ${userName}!`);
}

// Using the processUserInput function with the callback
processUserInput("Alice", callback);
