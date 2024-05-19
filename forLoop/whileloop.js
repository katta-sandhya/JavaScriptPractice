const numbers = [45, 4, 9, 16, 25];

let txt = "";
while (numbers.length > 0) {
  txt += numbers.shift() + "\n";
}

console.log(txt);  // Output: "45491625"

