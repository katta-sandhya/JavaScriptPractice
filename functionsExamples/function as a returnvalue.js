function sports(sport)
{
    return function(name)//creating inline function for customization
    {
       return sport+" ," +name;
    };
}
const player=sports("cricket");//This invocation creates and returns a new function (the inner function) that will prepend the word
console.log(player("Virat Kohli"));