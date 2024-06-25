const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promise3 = 42;

Promise.allSettled([promise1, promise2, promise3]).then(results => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log('Fulfilled with value:', result.value);
    } else {
      console.log('Rejected with reason:', result.reason);
    }
  });
});
