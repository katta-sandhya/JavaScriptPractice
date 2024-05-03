const person = {
    firstName: "Sandhya",
    lastName: "Katta",
    language: "",
    set lang(lan)
    {
        this.language=lan;
    }
};
person.lang="english";//set an object property using setter and lang is name of the setter
console.log(person.language);

