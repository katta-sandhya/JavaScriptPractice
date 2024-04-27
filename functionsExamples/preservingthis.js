const person = {//In the display method, this refers to the person object
    firstName:"Sandhya",
    lastName: "Katta",
    display: function () {
      let x = console.log(this.firstName + " " + this.lastName);
    }
  }
  
  person.display();