// const async = require('async')
// async function greet() {
//  const r1=await t1();
//  console.log(r1);  
//  const r2=await t2();
//  console.log(r2); 
//  const r3=await t3();
//  console.log(r3);  
//   return r3;
// }
// greet();

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("Hey!!");
//     });
//     console.log(await myPromise);// for many promises  const result = await promise.all([p1,p2]);
//   }
  
//   myDisplay();
  


async function display() {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 2000);
  })
  console.log(await promise1);
}
display();
