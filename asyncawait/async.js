// Import readline-sync module
const readline = require('readline-sync');

// Async function to simulate waiting and then receiving input
async function waitForInput() {
    console.log("Waiting for user input in 5 seconds...");
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Use readline-sync to get user input
    let userInput = readline.question("Enter your name: ");
    console.log("User input:", userInput);
}

// Call the async function to start execution
waitForInput();