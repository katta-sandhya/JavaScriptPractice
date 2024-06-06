class MyClass {
    constructor(value) {
      this.value = value;
    }
  
    firstMethod() {
      console.log("First method called!");
      // Call secondMethod from within firstMethod
      this.secondMethod();
    }
  
    secondMethod() {
      console.log("Second method called!");
      console.log("Value:", this.value);
    }
  }
  
  // Create an instance of MyClass
  const myInstance = new MyClass(23);
  
  // Call the first method, which will in turn call the second method
  myInstance.firstMethod();
  