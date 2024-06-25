const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Error 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Error 2'));
const promise3 = new Promise((resolve, reject ) => setTimeout(reject, 200, 'Error3'));

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); // 'Success' (first fulfilled promise)
}).catch((error) => {
  console.error(error.errors); // ['Error 1', 'Error 2'] (if all promises reject)
});
