const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3989;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedDate: '2020-01-01', pages: 200 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedDate: '2021-02-01', pages: 300 },
    { id: 3, title: 'Book Three', author: 'Author Three', publishedDate: '2022-03-01', pages: 250 }
];

// DELETE route to remove all books
app.delete('/books', (req, res) => {
    books = []; // Clear the array by setting it to an empty array
    res.status(200).send({ message: 'All books deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
