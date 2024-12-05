var courses = ["JavaScript","Java","C","C++","Python"];
delete courses[2];
console.log(courses.length);//5
console.log(typeof typeof 1);//string

var y = 1;
if (function F(){})
{
y += typeof F;
}
console.log(y);//1undefined


var output = (function(x){
    delete X;
    return X;
    }
    )(0);
    console.log(output);
   


    // var Foo = Function Bar(){
    // return 7;
    // };
    // typeof Bar();
    