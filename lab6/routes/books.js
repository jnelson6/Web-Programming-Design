/*


NEED TO UPDATE THE PATCH SECTION


You must do FULL error handling and input checking 
for ALL routes! checking if input is supplied, 
correct type, range etc. and throwing errors when 
you encounter bad input.



GET /books
Responds with an array of all books in the format of
 {"_id": "book_id", "title": "book title"} 
 Note: Notice you are ONLY returning the book ID as 
 a string, and Book Title

[{ "_id": "603d965568567f396ca44a72","title": "The Shining"},
{ "_id": "704f456673467g306fc44c34","title": "Christine"},
.....]
*/

const express = require('express');
const router = express.Router();
const data = require('../data');
const bookData = data.books;

router.get('/:id', async (req, res) => {
  try {
    let book = await bookData.getUserById(req.params.id);
    res.json(books);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
  }
});

router.get('/', async (req, res) => {
  try {
    let bookList = await bookData.getAllBooks();
    res.json(bookList);
  } catch (e) {
    res.sendStatus(200);
  }
});

router.post('/', async (req, res) => {
  let bookInfo = req.body;

  if (!bookInfo) {
    res.status(400).json({ error: 'You must provide data to create a book' });
    return;
  }

  if (!bookInfo.title) {
    res.status(400).json({ error: 'You must provide a book title' });
    return;
  }


  try {
    const newBook = await bookData.addBook(
        bookInfo.title
    );
    res.json(newBook);
  } catch (e) {
    res.sendStatus(200);
  }
});

// updates by replacing whole book
router.put('/:id', async (req, res) => {
  let bookInfo = req.body;
  if (!bookInfo) {
    res.status(400).json({ error: 'You must provide data to update a book' });
    return;
  }
  if (!bookInfo.title) {
    res.status(400).json({ error: 'You must provide a title' });
    return;
  }
  try {
    await bookData.getBookByID(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  try {
    const updatedBook = await bookData.updateBook(req.params.id, bookInfo);
    res.json(updatedBook);
  } catch (e) {
    res.sendStatus(500);
  }
});

// IS THIS NECESSARY??
//Missing PATCH - updates by replacign only supplied info ---NEED TO CHANGE TO DO WHAT ITS SUPPOSED TO
router.patch('/:id', async (req, res) => {
  let bookInfo = req.body;
  if (!bookInfo) {
    res.status(400).json({ error: 'You must provide data to update a book' });
    return;
  }
  if (!bookInfo.title) {
    res.status(400).json({ error: 'You must provide a title' });
    return;
  }
  try {
    await bookData.getBookByID(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  try {
    const updatedBook = await bookData.updateBook(req.params.id, bookInfo);
    res.json(updatedBook);
  } catch (e) {
    res.sendStatus(500);
  }
});





router.delete('/:id', async (req, res) => {
  if (!req.params.id) throw 'You must specify an ID to delete';
  try {
    await bookData.getBookById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  try {
    await bookData.removeBook(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;