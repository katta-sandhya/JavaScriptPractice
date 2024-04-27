

// Example 2 

function one (callback) {
   const response =  callback();
   console.log(response);
    return response + 2;
}

function two () {
    console.log(' I am function 2');
    return 12;
}

const responseOfOne = one (two);
console.log('res one : ', responseOfOne)