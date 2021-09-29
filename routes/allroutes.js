var express = require("express");
var router = express.Router();
const books = require("../services/books");

//############### GET #################
router.get('/allbooks',async function(req,res){
    let allbooks = books.getBook();
    res.json(allbooks);
});

//############### POST #################
router.post('/add',async (req, res) => {
    let addedBook = books.addBook(req);
    res.json(addedBook);
});

//############### PUT #################
router.put('/update/:id',function(req,res){
    let updateBooks = books.updateBook(req);
    res.json(updateBooks);
});

//############### DELETE #################
router.delete('/delete/:id',function(req,res){
    let deleteBooks = books.deleteBook(req);
    res.json(deleteBooks);
});

module.exports = router;
