// function greet(name, callback) {
// setTimeout(() => {
//   console.log(`Hello ${name}`);
//   callback();
// }, 2000);

// }
// function hello(res, err) {
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(`success`)
//     }
    
// }
// greet('sandy', hello);
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
console.log(obj);

// changing the value of obj1
        
obj.name = "Akki";
console.log(obj);
console.log(obj2);

var x = 2;
var y =x;
console.log(x);
console.log(y);


 function multiply(a) {
    return function(b) {
        return a*b;
    }
    
 }
 const multipli = multiply(3);
 console.log(multipli(2));
