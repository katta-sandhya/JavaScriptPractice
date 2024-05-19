const fruits = new Map([//constructor creates a Map object.
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits);
  fruits.clear();//clear() :method removes all the elements from a map.
  console.log(fruits.size);//size: property returns the number of elements in a map.

  const fruit = new Map();
  fruit.set("a",1);
  fruit.set("b",2);
  fruit.set("c",3);
  console.log(fruit);
  fruit.delete("a");//delete() :method deletes an element from a map.
  console.log(fruit.size);
  console.log(fruit);
  console.log(fruit.get("b"));//get() :method gets the value of a key in a map.
  console.log(fruit.has("a"));//has() : method returns true if a key exists in a map.
  console.log(fruit.set("c", 4));//set() :adds and updates an element to a map.
  console.log(fruit);

