const months = ["June", "sepetember", "August", "April"];
months.pop();//removes (pops) the last element of an array and returns the last element and changes the original array.
console.log(months);
months.push("july");//adds the new elements to the end of an array and returns the last element and changes the original array.
console.log(months);
months.shift();//removes (push) the first element of an array and returns the last element and changes the original array.
console.log(months);
months.unshift("july");//adds the new elements to the beginning of an array and returns the last element and changes the original array.
console.log(months);
//console.log(months.reverse());//reverses the order of the elements in an array.
console.log(months.toReversed());//reverses the order of the elements in an array and does not overwrites the original array
