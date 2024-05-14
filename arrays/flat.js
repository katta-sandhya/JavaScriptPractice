const myArr = [1, 2, [3, [4, 5, 6], 7], 8, 9];
const newArr = myArr.flat(0);
console.log(newArr);
const newArr1 = myArr.flat(2);
console.log(newArr1);
