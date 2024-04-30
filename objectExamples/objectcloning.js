// Using object spread syntax for shallow cloning
const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = { ...originalObject };

// Now, if you change a value in one object, it won't affect the other
clonedObject.key1 = 'new value';

console.log(originalObject); // { key1: 'value1', key2: 'value2' }
console.log(clonedObject);   // { key1: 'new value', key2: 'value2' }
