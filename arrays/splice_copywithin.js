const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 1, "Lemon", "Kiwi"));//method adds and/or removes array elements and overwrites the original array.
console.log(fruits.toSpliced(2, 0, "Lemon", "Kiwi"));//adds and/or removes array elements and returns a new array.does not change the original array.
console.log(fruits); // Output should be: Banana, Orange, Lemon, Kiwi, Mango
console.log(fruits.copyWithin(3,0,2));//copies array elements to another position in an array and overwrites the existing values.
