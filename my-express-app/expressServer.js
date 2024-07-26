const express = require('express');
const app = express();
const port = 3909;

app.get('/paramurl/:name/:age', (req, res) => {
    res.send('Hello world I am ' + req.params.name + req.params.age);

});
app.get('/queryurl', (req, res) => {
    res.send('Hello world I am ' + req.query.name + req.query.age);

});
app.get('/Details@redmi', (req, res) => {
    const redmi = {
        model: "redmi 10",
        RAM: "8GB",
        storage: "64GB"
    }
    res.send(redmi);
});
app.get('/error' , (res, req) => {
    res.statusCode(402);
    res.send(`It's an error`);
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
