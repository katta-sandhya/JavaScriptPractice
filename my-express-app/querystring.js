const express = require('express');
const app = express();
const port = 4890;

app.get('/search', (req, res) => {
    // Accessing query parameters from the query string
    const query = req.query.query;
    const category = req.query.category;
    const page = req.query.page;

    // Responding with the extracted query parameters
    res.send(`Query: ${query}, Category: ${category}, Page: ${page}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
