const numbers = [45, 4, 9, 16, 25];

let txt = "";

numbers.forEach(myFunction);
console.log(txt +  "\n");
function myFunction(value) {
  txt += value;
}

