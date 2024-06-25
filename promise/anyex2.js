const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Error 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Error 2'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Success'));

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error.errors); // Outputs array of errors
});

/*const promise1 = new Promise((resolve, reject) => setTimeout(() => {
    console.log('promise1 rejected at 500ms');
    reject('Error 1');
  }, 500));
  
  const promise2 = new Promise((resolve, reject) => setTimeout(() => {
    console.log('promise2 rejected at 100ms');
    reject('Error 2');
  }, 100));
  
  const promise3 = new Promise((resolve, reject) => setTimeout(() => {
    console.log('promise3 rejected at 200ms');
    reject('Success');
  }, 200));
  
  Promise.any([promise1, promise2, promise3])
    .then((value) => {
      console.log('Promise.any resolved with value:', value);
    })
    .catch((error) => {
      console.error('Promise.any rejected with errors:', error.errors);
    });*/
  
