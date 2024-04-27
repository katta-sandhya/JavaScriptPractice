const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"Katta",
    lastName: "Sandhya"
  }
  const person2 = {
    firstName:"Sandhya",
    lastName: "Katta"
  }
  
  // This will return "John Doe":
 const FullName= person.fullName.call(person1);
 console.log(FullName);
  
  