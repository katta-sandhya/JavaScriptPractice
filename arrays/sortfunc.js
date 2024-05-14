const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort(function(a,b){ return a-b}));
console.log(fruits.sort(function(a,b){ return b.length-a.length}));