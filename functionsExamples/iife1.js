var counter = (function() {//iife using closure function
    var count = 0;

    return function() {
        return ++count;
    };
})();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3 
	let greet = () => console.log("Welcome to GeeksforGeeks!"); 
	greet(); 


