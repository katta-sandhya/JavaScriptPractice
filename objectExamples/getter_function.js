const person = {
    firstName: "Sandhya",
    lastName: "Katta",
    language: "Telugu",
    get name() {//get is a special keyword in JavaScript used to define a getter method.lang is the name of the getter method.{} encloses the body of the getter method
      return this.firstName.toUpperCase();
    },
    get fullName() {
        return `${this.lastName} ${this.language}`;
      }
  };
  console.log(person.name);
  console.log(person.fullName);
  
  