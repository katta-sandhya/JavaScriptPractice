// Base class
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);

    }
    ages() {
      console.log(`${this.name} age is ${this.age}.`);
    } 
  }
  
  // Derived class
  class Dog extends Animal {
    constructor(name, age, breed, colour) {
      super(name, age);  // Call the parent class constructor
      this.breed = breed;
      this.colour = colour;
      
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
    color() {
      console.log(`${this.name} is ${this.colour}.`);
    }
  }
  
  const myDog = new Dog('Rex', '2', 'German Shepherd', 'black');
  myDog.speak();  // Output: Rex barks.
  myDog.color();
  myDog.ages();
  