const frontEnd = ["HTML", "CSS", "Js"];//creating an array using []
const backEnd = new Array("C", "node Js", "Java", "Python");//creating an array using new
console.log(frontEnd);
console.log(backEnd);
a = frontEnd.at(1);//at()-returns an indexed element from an array and returns the same as [].
b = frontEnd[0];
c = backEnd.at([-3]);
console.log(a);
console.log(b);
console.log(c);
console.log(frontEnd.concat(backEnd)); //concat()-joins 2 or more arrays 
console.log(frontEnd.join(" and "));//join()-returns array as a string using seperator like , or and
console.log(backEnd.slice(1,3)); //slice()-returns selected elements in an array as a new array
console.log(frontEnd.constructor);//returns the function that created the array prototype
console.log(backEnd.fill("PHP",3,4));