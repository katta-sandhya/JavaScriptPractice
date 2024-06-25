function handleSuccess(message) {
    console.log(message);
}

function handleError(error) {
    console.log(error);
}

let promise = new Promise(function(resolve, reject) {
    resolve("Operation successful!");
});

promise.then(handleSuccess).catch(handleError);
