let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }//break:can only be used to jump out of a loop or a switch.
    text +=  i + "\n" ;
  }
  console.log(text);


 let text1 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }//continue:can only be used to skip one loop iteration.
    text1 += i +"\n" ;
  }
  console.log(text1);