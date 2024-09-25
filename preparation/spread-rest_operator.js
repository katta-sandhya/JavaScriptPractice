const a = [1,2,3]
const b = [...a]//spread operator
const c=[5,6]

console.log(b);
console.log([...a,...c]);//same as objects

const[first, ...rest] = [1, 2 ,3, 4, 5, 6];
console.log(first);
console.log(rest);

function display(first, second, ...rest) {
    console.log(first); // Result: 1
    console.log(second); // Result: 2
    console.log(rest); // Result: [3, 4, 5]
  }
  display(1, 2, 3, 4, 5);

  setTimeout(() => {
    console.log(a);
  }, 1000);
  

