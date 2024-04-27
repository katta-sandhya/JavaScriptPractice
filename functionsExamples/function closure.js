function outerFunction() {
    let counter = 0;

    return function() {
        counter++;
        return counter;
    };
}

const incrementCounter = outerFunction();
console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
