const _ = require('lodash');//lodash and _.clonedeep are libraries

// Using lodash for deep cloning
const originalObject = { key1: 'value1', nested: { key2: 'value2' } };
const clonedObject = _.cloneDeep(originalObject);

clonedObject.nested.key2 = 'new value';

console.log(originalObject); // { key1: 'value1', nested: { key2: 'value2' } }
console.log(clonedObject);   // { key1: 'value1', nested: { key2: 'new value' } }
