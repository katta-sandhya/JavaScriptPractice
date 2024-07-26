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

// DELETE route to remove a book by its ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    //const bookId = 2;
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).send({ message: 'Book not found' });
    }

    // Remove the book from the array
    books.splice(bookIndex, 1);//1-number of elements to remove from the books array

    res.status(200).send({ message: 'Book deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
