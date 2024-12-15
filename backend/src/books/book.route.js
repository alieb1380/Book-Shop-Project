const express = require('express')
const Book = require('./book.model');
const router = express.Router();

// post = when submit sth frontend to db
// get = when get sth back from db
// put/patch = when edit or update sth
// delete = when delete sth

// post a book
router.post("/create-book", async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book Posted Successfully!!", book: newBook});
    } catch (error) {
        console.log("Error Creating Book!!", error);
        res.status(500).send({message: "Failed to create book!!"});
    }
})

// get all books

module.exports = router;