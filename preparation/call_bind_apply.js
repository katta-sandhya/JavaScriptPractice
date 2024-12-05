 function fullname() {// ctrl+/- to command all lines of code at a time
    return this.fname + this.lname
}
const a = {
    fname:"aaasdf",
    lname: "hjkl",
    
}
console.log(fullname.call(a));//fullname.apply(a)
const funame = fullname.bind(a);
console.log(funame());//call the bound person



