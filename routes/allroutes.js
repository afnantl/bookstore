var express = require("express");
var router = express.Router();
const book = require("../services/books");

router.get('/allbooks',async function(req,res){
    let allbooks = book.allBooks();
    res.json(allbooks);
});

router.post('/add',async (req, res) => {
    let addedBook = book.addBook(req);
    res.json(addedBook);
})

router.put('/books/:id',function(req,res){
    let updateBooks=book.updateBook(req);
    res.json(updateBooks);
})


router.delete('/books/:id',function(req,res){
    let id=req.params.id;
    let index=books.findIndex((book)=>{
        return (book.id==Number.parseInt(id))
    })
    if(index>=0){
        let obj=books[index]
//splice is used to delete from array
        books.splice(index,1)
        res.json(obj)
    }else{
        res.status(404)
    }
})


module.exports = router;
