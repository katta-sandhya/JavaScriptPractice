const abcd = (num) => {
    return new Promise((resolve, reject) => {
       if (num>0) 
         resolve('Number > 0')
         else
         reject('Number > 0')
    })
       
    }
abcd(7).then((res) => {
    console.log(res);
}).catch((err) => {
console.error(err);
})