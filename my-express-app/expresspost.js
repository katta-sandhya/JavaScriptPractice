const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3908;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.post('/studentDetails', (req, res) => {
console.log(req.body.name, req.body.class);
res.send(`Welcome to class ${req.body.name}, ${req.body.class}`)
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  