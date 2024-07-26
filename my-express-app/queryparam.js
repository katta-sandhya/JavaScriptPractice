const express = require('express');
const app = express();
const port = 3809;

app.get('/search', (req, res) => {
    // Accessing query parameters
    const query = req.query.query;
    const category = req.query.category;
    const page = req.query.page;

    // Responding with the extracted query parameters
    res.send(`Query: ${query}, Category: ${category}, Page: ${page}`);
});
app.get('/lru', (req, res) => { //url parameter
    res.send('Hello world I am '+ req.params.name + req.params.age);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
