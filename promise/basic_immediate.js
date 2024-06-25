const p = new Promise(function(resolve, reject){
    const result = "promise rejected";
    if(result){
        resolve("promise fulfilled");//resolve(reject("promise rejected"));
    }
    else
    {
        reject("promise rejected");
    }
    })
//console.log(p);//calling a callback function
p.then(function(val) {
    console.log(val);
}) .catch(function(val){
    console.log(val);
})

