const person = {
    fullName: function(age, country) {
      return this.firstName + " " + this.lastName + "," + age + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Sandhya",
    lastName: "Katta"
  }
  
 const Details= person.fullName.call(person1, 21, "India");
 console.log(Details);
  
  