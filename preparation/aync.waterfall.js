const async = require('async');
const task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("task1 completed"); 
           resolve(`task1 success`);
        }, 1000);
    })
};
const task2 =(fromprevioustask1) => {
    
    return new Promise((resolve, reject) => {
        console.log(fromprevioustask1);
        setTimeout(() => {
            console.log("task2 completed"); 
            resolve(`task2 success`);
         }, 2000);
    })
};
async.waterfall([
    (callback) => {
        task1()
            .then(result => callback(null, result))  // Passing result from task1 to callback
            .catch(err => callback(err));  // Handling error
    },
    // Task 2: Receives result from task1 and calls task2, then passes result to callback
    (resultfromprevious, callback) => {
        task2(resultfromprevious)
            .then(result => callback(null, result))  // Passing result from task2 to callback
            .catch(err => callback(err));  // Handling error
    }
], 
(err,finalresult) => {
    if(err){
        console.log(err);
    }
    else {
        console.log(finalresult);
    }
});