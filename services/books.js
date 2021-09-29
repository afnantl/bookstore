const books=[];
var i = 0;

function addBook(req){
  let newBook = {
    "id":++i,
    "name":req.body.name,
    "author":req.body.author,
    "edition":req.body.edition
    }
    books.push(newBook);
    return newBook;
  
}

  module.exports = { addBook };


