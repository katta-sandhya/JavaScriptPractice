function asyncOperation(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("operation success");
      } else {
        reject("operation failed");
      }
    }, 2000);
  });
}
asyncOperation(true)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
