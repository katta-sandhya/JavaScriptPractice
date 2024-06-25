/*function greet() {
    
    setTimeout(function(){
        console.log("Hello, world!");
        return "string";
    }, 2000);
}
const result = greet();

 // "Hello, world!" will be logged after 2 seconds
console.log("HI",result);*/


function greet() {
    setTimeout(function() {
        console.log("Hello, world!");
    }, 2000);
    return "string";
}

const result = greet();

// "HI string" will be logged immediately
console.log("HI", result);
