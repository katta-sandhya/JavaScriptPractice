class Calculator {
    // Method to add two numbers
    add(a, b, c) {
      return a + b + c;
    }
  
    // Method to subtract two numbers
    subtract(a, b) {
      return a - b;
    }
  
    // Method to multiply two numbers
    multiply(a, b, c) {
      return a * b * c;
    }
  
    // Method to divide two numbers
    divide(a, b) {
      if (b === 0) {
        console.log('Error: Division by zero is not allowed.');
        return undefined;
      }
      return a / b;
    }
    mod(a,b) {
        if (b === 0) {
            console.log('Error: Division by zero is not allowed.');
            return undefined;
          }
          return a % b;  
    }
  }
  
  // Create an instance of the Calculator class
  const calc = new Calculator();
  const num1 = 10;
  const num2 = 4;
  const num3 = 3;
 
  
 console.log(calc.add(num1, num2, num3)); // Output: 10 + 5 = 15
  console.log(`${num1} - ${num2} = ${calc.subtract(num1, num2)}`); // Output: 10 - 5 = 5
  console.log(`${num1} * ${num2} * ${num3} = ${calc.multiply(num1, num2, num3)}`); // Output: 10 * 5 = 50
  console.log(`${num1} / ${num2} = ${calc.divide(num1, num2)}`); // Output: 10 / 5 = 2
  
  // Test division by zero
  console.log(`${num1} / 0 = ${calc.divide(num1, 0)}`); // Output: Error: Division by zero is not allowed.
  console.log(`${num1} / 0 = ${calc.mod(num1, 0)}`); // Output: Error: Division by zero is not allowed.
  
  