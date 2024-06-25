/*let promise1 = new Promise(function(resolve) {
    setTimeout(resolve, 500, 'First promise resolved');
});

let promise2 = new Promise(function(resolve) {
    setTimeout(resolve, 1000, 'Second promise resolved');
});

let promise3 = new Promise(function(reject) {
    setTimeout(reject, 300, 'Third promise rejected');
});

Promise.race([promise1, promise2, promise3]).then(function(value) {
    console.log(value); // Output: Third promise rejected
}).catch(function(error) {
    console.log(error); // Output: Third promise rejected
});*/

const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Error 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Successs'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Success'));

Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value); // 'Success' (if promise2 resolves first)
}).catch((error) => {
  console.error(error); // 'Error 1' (if promise1 rejects first)
});

