const person = {//objects are mutable
    firstName:"sandhya",
    lastName:"katta",
    age:50, eyeColor:"blue"
  }
  
  const x = person;
  x.age = 21;     // Will change both x.age and person.age
  console.log(person.age);
  console.log(x.age);