function myFunction() {
    let localVar = 42;
    globalVar = 100;
    console.log(localVar);
}

myFunction();

 // This will result in an error because localVar is not defined in the global scope
console.log(globalVar); // This will log 100 because globalVar is attached to the global object (window in browsers)
