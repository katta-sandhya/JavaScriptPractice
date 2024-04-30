const person = {
    firstName: "Sandhya",
    lastName: "Katta",
    language: "",
    set lang(lan)
    {
        this.language=lan;
    }
};
person.lang="english";
console.log(person.language);

