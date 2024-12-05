/*const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('hello').digest('hex');
//digest - to produce a fixed size input
//hex- specifies the encoding of the output. In this case, it will return the hash value as a hexadecimal string.

console.log(hash);*/

console.time('myTimer'); // Starts timer
// Some time-consuming operation
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('myTimer'); // Outputs: "myTimer: X ms"
