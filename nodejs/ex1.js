var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, function() {
  console.log('Server is running at http://localhost:3000/');
});

server.on('error', function (err) {
  if (err.code === 'EADDRINUSE') {
    console.log('Port 8080 is already in use');
  } else {
    console.error(err);
  }
});
