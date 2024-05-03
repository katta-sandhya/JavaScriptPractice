function outerFunction() {
    let counter = 0;

    return function() {
        counter++;//variable increment inside a inline function is not destroyed by using this function
        return counter;
    };
}

const incrementCounter = outerFunction();
console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
