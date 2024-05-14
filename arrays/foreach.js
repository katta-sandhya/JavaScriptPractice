let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);//calls a function for each element in an array

function myFunction(item) {//For each element, it calls the myFunction callback function and passes the current element as an argument.
  sum += item;
}
console.log(sum);