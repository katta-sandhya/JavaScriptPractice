const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const numbers1 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers1.map(num => num ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


const persons = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

const names = persons.map(function(person) {
    return person.name;
});

console.log(names); // Output: ['John', 'Alice', 'Bob']
