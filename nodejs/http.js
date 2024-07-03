const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');//the data we are sending in return
});

const port = 5009;//passing port num with parameter
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
