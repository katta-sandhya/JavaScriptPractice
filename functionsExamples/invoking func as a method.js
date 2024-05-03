const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
 const Fullname= myObject.fullName();
 console.log(Fullname);