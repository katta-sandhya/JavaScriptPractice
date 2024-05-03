const Details = {firstName:"Sandhya",
lastName:"Katta",
age:21,
eyecolor:"black",
property:function()
{
    return this.firstName+"'s " + "eyecolor is " +this.eyecolor;
}};
Details.name=function()//adding a method to an object
{
    return this.firstName + " " + this.lastName;
}

console.log(Details.name());