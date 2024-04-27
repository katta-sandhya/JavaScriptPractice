const Details = {name:"Sandhya",
age:21,
eyecolor:"black",
property:function()
{
    return this.name+"'s " + "eyecolor is " +this.eyecolor;
}};
console.log(Details.property());