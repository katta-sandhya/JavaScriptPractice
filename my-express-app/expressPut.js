const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory data store
let books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedDate: '2020-01-01', pages: 200 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedDate: '2021-02-01', pages: 300 }
];
// Update a book by ID
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, publishedDate, pages } = req.body;

    const bookIndex = books.findIndex(book => book.id === bookId);//testing function provided to findIndex
    if (bookIndex === -1) {
        return res.status(404).send({ message: 'Book not found' });
    }

    const updatedBook = {
        id: bookId,
        title,
        author,
        publishedDate,
        pages
    };

    books[bookIndex] = updatedBook;
    res.status(200).send(updatedBook);
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

