const ages = [3, 10, 18, 20, 26, 4];

function checkAge(age) {
  return age > 18;
}

console.log(ages.find(checkAge));//returns the value of the first element that passes a test
console.log(ages.findIndex(checkAge));//returns the index of the first element that passes a test
console.log(ages.findLast(checkAge));//returns the value of the last element that passes a test
console.log(ages.findLastIndex(checkAge));//returns the index of the first element that passes a test
