try {
    // Define an array with 5 elements
    let array = [1, 2, 3, 4, 5];
  
    // Attempt to access an element at index 10
    let index = 10;
    if (index >= array.length || index < 0) {
      throw new RangeError(`Index ${index} is out of bounds. Array length is ${array.length}.`);
    }
  
    console.log(array[index]);
  } catch (error) {
    if (error instanceof RangeError) {
      console.error("RangeError caught: " + error.message);
    } else {
      console.error("Other error: " + error.message);
    }
  }
  