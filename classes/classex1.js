// Define a class
class Person {
    // Constructor to initialize the object
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to get the person's details
    getDetails() {
      return `my age is ${this.age} years old`;
    }
  }
  
  // Create an instance of the class
  const person1 = new Person('Sandhya', 22);
  
  // Access the method
  console.log(person1.getDetails());  // Output: Alice is 30 years old.
  