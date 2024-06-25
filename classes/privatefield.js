class Counter {
    #count = 0;  // Private field: node js supports private fields and methods using the # syntax.
    increment() {
      this.#count++;
    }
  
    getCount() {
      return this.#count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  console.log(counter.getCount());  // Output: 1
  //console.log(counter.#count);  // SyntaxError: Private field '#count' must be declared in an enclosing class. Private fields and methods cannot be accessed from outside the class
  
  