function greet(name, callback) {
setTimeout(() => {
  console.log(`Hello ${name}`);
  callback();
}, 2000);

}
function hello(res, err) {
    if(err){
        console.log(err);
    }
    else {
        console.log(`success`)
    }
    
}
greet('sandy', hello);