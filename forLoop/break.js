let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }//break
    text +=  i + "\n" ;
  }
  console.log(text);


 let text1 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }//break
    text1 += i +"\n" ;
  }
  console.log(text1);