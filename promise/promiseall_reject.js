let promise1 = Promise.resolve(3);
let promise2 = new Promise(function(resolve) {
    setTimeout(resolve, 100, 'foo');
});
let promise3 = new Promise(function(resolve,reject) {
    setTimeout(reject, 200, 'error');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
}).catch(function(error) {
    console.log(error); // Output: error
});
