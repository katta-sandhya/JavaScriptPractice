// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();//returns an Iterator with [value,value] pairs from a set.

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry + "\n";
}
console.log(text);


const letters1 = new Set(["a","b","c"]);

// Get all Keys
const myIterator1 = letters1.keys();//returns an Iterator with [value,value] pairs from a set.

// List all Entries
let text1 = "";
for (const entry of myIterator1) {
  text1 += entry + "\n";
}
console.log(text1);