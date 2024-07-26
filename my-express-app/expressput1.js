const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedDate: '2020-01-01', pages: 200 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedDate: '2021-02-01', pages: 300 },
    { id: 3, title: 'Book Three', author: 'Author Three', publishedDate: '2022-03-01', pages: 250 }
];

// PUT route to update multiple books
app.put('/books', (req, res) => {
    const updates = req.body; // Assuming req.body is an array of book updates

    if (!Array.isArray(updates)) {
        return res.status(400).send({ message: 'Request body must be an array of book updates' });
    }

    updates.forEach(update => {
        const bookId = update.id;
        const bookIndex = books.findIndex(book => book.id === bookId);

        if (bookIndex !== -1) {
            const { title, author, publishedDate, pages } = update;
            const updatedBook = { id: bookId, title, author, publishedDate, pages };
            books[bookIndex] = updatedBook;
        }
    });

    res.status(200).send({ message: 'Books updated successfully', books });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
