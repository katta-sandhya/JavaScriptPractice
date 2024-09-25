//async.each(collection, iteratee, callback);


const async = require('async');

const names = ['sandy', 'babi', 'sai', 'bilva'];
async.each(names,(name, callback) => {
    setTimeout(() => {
        console.log(`fname is : ${name}`);
    }, 1000);
    callback();
},
(err) => {
    if(err){
        console.log("error")
    }
    else {
        console.log("All success")
    }
});
/////////////////////////////////////
///for-of
let child = "";
for(let i of names){
    
   child += i; 
}
console.log(child);
/////////////-for-in
let child_family = {1:"sandy", 2:"babi"}
let kids ="";
for(let i in child_family){
    kids += child_family[i]
}
console.log(kids);
