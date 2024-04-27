const person = {
    firstName:"Sandhya",
    lastName: "Katta",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Node",
    lastName: "JS",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName());