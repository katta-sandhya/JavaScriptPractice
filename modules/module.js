var http = require('http');
var dt = require('./own');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8088);
console.log('Server running at http://localhost:8088/');