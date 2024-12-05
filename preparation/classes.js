
class Student {//class
    constructor(name, age, gender){// constructor
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    //method
    getDetails(){
        return `${this.name}, ${this.age}, ${this.gender}`;
    }
}
//create a instance of a class
const details = new Student("asdf", 22, "F");
console.log(details.getDetails());//method call