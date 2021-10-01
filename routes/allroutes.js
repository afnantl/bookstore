var express = require("express");
var router = express.Router();
const book = require("../services/books");

router.get('/allbooks', function(req,res){
    let stat;
    let allbooks = book.allBooks();
    if(allbooks.msg == "success"){
        stat=200;
     } else {
        stat=404;
     }
     res.status(stat).json(allbooks);
});
router.get('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});

router.post('/add', function (req,res) {
    let stat;
    let addedBook = book.addBook(req);
    if(addedBook.msg == "success"){
        stat=200;
     } else {
        stat=404;
     }
     res.status(stat).json(addedBook);
})
router.post('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});

router.put('/update/:id', function (req,res){
    let stat;
    let updateBooks=book.updateBook(req);
    if(updateBooks.msg == "success"){
       stat=200;
    } else {
       stat=404;
    }
    res.status(stat).json(updateBooks);
});
router.put('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});


router.delete('/delete/:id',function(req,res){
    let deleteBooks = book.deleteBook(req);
    if(deleteBooks.msg == "success"){
        res.status(200).json(deleteBooks);
    } else {
    res.status(404).json(deleteBooks);
    }
});
router.delete('*', function (req, res) {
    res.status(404).json({msg:"Invalid route"});
});


module.exports = router;
