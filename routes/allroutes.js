var express = require("express");
var router = express.Router();
const book = require("../services/books");

router.get('/allbooks',async function(req,res){
    let allbooks = book.getBook();
    res.json(allbooks);
});

router.post('/add',async (req, res) => {
    let addedBook = book.addBook(req);
    res.json(addedBook);
})

router.put('/update/:id',function(req,res){

    let updateBooks=book.updateBook(req);
    res.json(updateBooks);
})


router.delete('/delete/:id',function(req,res){
    let deleteBooks = book.deleteBook(req);
    res.json(deleteBooks);
})


module.exports = router;
