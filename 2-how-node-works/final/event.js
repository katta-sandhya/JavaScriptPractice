const EventEmitter = require('events');
const http = require('http');


class Sales extends EventEmitter {
    constructor() {
      super();
    }
  }
  
  const myEmitter = new Sales();
//const myEmitter = new EventEmitter(); //instance of a emitter

myEmitter.on("newSale", () => {
    console.log("There was a new sale");
});
myEmitter.on("newSale", () => {
    console.log(`Customer Name : John`);
});
myEmitter.on("newSale", stock => {
    console.log(`There are ${stock} left for a sale`);
})
myEmitter.emit('newSale', 9 ); //emit an newsale event


//////////////////////
const server = http.createServer();


server.on("request", (req,res) => {
    console.log("request received");
    res.end("request received");
});

server.on("request", (req,res) => {
    console.log("another request received");
});

server.on("close", () => {
    console.log("server closed");
    
});
server.listen(8000, "127.0.0.1", () => {
    console.log("waiting for response...");
});


