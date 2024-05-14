const numbers1 = [11, 12, 13, 14, 15];

const sum = numbers1.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

console.log("-----------------------------------------------");

const numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
  return total - num;
}
