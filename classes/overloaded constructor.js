class User {
    constructor(...args) {
      if (args.length === 1 && typeof args[0] === 'string') {
        // Constructor with username
        this.username = args[0];
        this.age = null;
      } else if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'number') {
        // Constructor with username and age
        this.username = args[0];
        this.age = args[1];
      } else {
        throw new Error('Invalid arguments');
      }
    }
  
    getInfo() {
      return this.age !== null
        ? `Username: ${this.username}, Age: ${this.age}`
        : `Username: ${this.username}`;
    }
  }
  
  // Using the User class
  const user1 = new User('Alice');
  const user2 = new User('Bob', );
  
  console.log(user1.getInfo()); // Output: Username: Alice
  console.log(user2.getInfo()); // Output: Username: Bob, Age: 25
  
  try {
    const user3 = new User(123); // Invalid case for testing
  } catch (error) {
    console.log(error.message); // Output: Invalid arguments
  }
  