const letters = new Set(["a","b","c"]);//Set is a collection of unique values.
console.log(letters);
letters.clear();//clear():removes all values from a set.
console.log(letters.size);
answer = letters.has("d");//method returns true if a specified value exists in a set.
console.log(answer);


// Create a Set
const letters1 = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";
const d = "a";
const e = "b";
const f = "c";

// Add Values as Variables to the Set
letters1.add(a);//add(): method inserts a new element in the set.
letters1.add(b);
letters1.add(c);
letters1.add(d);
letters1.add(e);
letters1.add(f);
console.log(letters1.size);
console.log(letters1);
console.log(letters1.delete("a"));
console.log(letters1);
console.log(typeof letters1);//typeof
