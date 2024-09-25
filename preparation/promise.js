const a = new Promise((resolve, reject) => {
    setTimeout(() => { resolve ('1000');}, 1000);
});
a.then((resolve) => {
console.log(resolve)
}).catch((err)=>{
    console.log(err);
});
