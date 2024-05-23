class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Thar", 1999);
 console.log( "My Thar is " + myCar.age() + " years old.");