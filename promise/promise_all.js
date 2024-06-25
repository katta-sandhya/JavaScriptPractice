let promise1 = Promise.resolve(3);
let promise2 = 42; // This will be treated as a resolved promise with value 42
let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values); // Output: [3, 42, "foo"]
}).catch(function(error) {
    console.log(error);
});
