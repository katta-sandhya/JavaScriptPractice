function task1() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000, 'Task 1 completed');
    });
}

function task2() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 3000, 'Task 2 completed');
    });
}

function task3() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 2000, 'Task 3 completed');
    });
}

Promise.all([task1(), task2(), task3()]).then(function(results) {
    console.log(results); // Output: ["Task 1 completed", "Task 2 completed", "Task 3 completed"]
});
