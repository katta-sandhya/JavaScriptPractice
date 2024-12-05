const async = require('async');
async.parallel([  /// or async.series
    function (task1){//task1=callback
        setTimeout(() => {
            console.log(`task 1 completed`);
            task1();
        }, 2000);
    },
    function (task2){
        setTimeout(() => {
            console.log(`task 2 completed`) 
            task2();
        }, 1000);
    },  
],
(err, result) => {
    if(err){
        console.log(err);
    }
    else {
        console.log(result, " success");
    }
})