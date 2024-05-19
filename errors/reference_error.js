function exampleFunction() {
    try {
      // Trying to access a variable outside its scope
      console.log(scopedVariable);
    } catch (error) {
      if (error instanceof ReferenceError) {
        console.error("ReferenceError caught: " + error.message);
      } else {
        console.error("Other error: " + error.message);
      }
    }
  
    let scopedVariable = "This variable is declared after its usage";
  }
  
  exampleFunction();//invoking the function
  