const fs = require('fs');
const server = require('http').createServer();//like creating a server and then save it into a variable


server.on('request', (req,res) => {
    //solution1
    //fs.readFile('test-file.txt', (err, data) => {
      //  if(err) console.log(err);
      //  res.end(data);

  //  });

  //solution2: streams
 /*const readable = fs.createReadStream('test-file.txt')
 readable.on('data', chunk => {
    res.write(chunk);
 })
 readable.on("end", () =>{
    res.end();
 });
 readable.on("error", err => {
    console.log(err);
    res.statusCode(500);
    res.end("File not Found");
 })*/
//solution:3
  // Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});
server.listen(8000, '127.0.0.1', () => {
    console.log("success");
});