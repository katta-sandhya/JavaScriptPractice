class Person {
    constructor(firstName, lastName, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }
  
    // Getter for firstName
    get firstName() {
        // Trying to set invalid values
  try {
    person.firstName = ''; // Throws an error: First name must be a non-empty string
  } catch (error) {
    console.log(error.message);
  }
  
      return this._firstName;
    }
  
    // Setter for firstName
    set firstName(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('First name must be a non-empty string');
      }
      this._firstName = value;
    }
  
    // Getter for lastName
    get lastName() {
      return this._lastName;
    }
  
    // Setter for lastName
    set lastName(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Last name must be a non-empty string');
      }
      this._lastName = value;
    }
  
    // Getter for age
    get age() {
        try {
            person.age = -5; // Throws an error: Age must be a number between 0 and 120
          } catch (error) {
            console.log(error.message);
          }
      return this._age;
    }
  
    // Setter for age
    set age(value) {
      if (typeof value !== 'number' || value < 0 ) {
        throw new Error('age should be a positive number');
      }
      this._age = value;
    }
  
    // Method to get full name
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // Creating an instance of the Person class
  const person = new Person('John', 'Doe', 30);
  
  // Accessing properties using getters
  console.log(person.firstName); // Output: John
  console.log(person.lastName);  // Output: Doe
  console.log(person.age);       // Output: 30
  
  // Modifying properties using setters
  person.firstName = 'Jane';
  person.lastName = 'Smith';
  person.age = 25;
  
  console.log(person.getFullName()); // Output: Jane Smith
  console.log(person.age);           // Output: 25
  
  
  
  