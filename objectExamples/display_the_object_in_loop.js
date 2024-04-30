const Details = {name:"Sandhya",
age:21,
eyecolor:"black"};
let fullDetails=" ";
for(let x in Details){
    fullDetails += Details[x];//details[x] is beacuse x is a variable 
}
console.log(fullDetails);
