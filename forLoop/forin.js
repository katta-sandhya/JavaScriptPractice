const person = {fname:"John", lname:"Doe", age:25}; //only used for objects

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);