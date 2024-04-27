// Define a function that takes a callback
function greet(name, callback) {
    // Call the callback function with the greeting message
    callback("Hello, " + name + "!");
  }
  
  // Define a callback function
  function displayGreeting(greeting) {
    console.log(greeting);
  }
  
  // Call the greet function with a callback
  greet("katta", displayGreeting);
  