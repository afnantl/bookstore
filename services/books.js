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

function allBooks(){
  return books;
}
function updateBook(req){
   const id=req.params.id
   let name=req.body.name;  
   let author=req.body.author;
   let edition=req.body.edition;

   let index=books.findIndex((book)=>{  
       return(book.id==Number.parseInt(id)) 
   })
   let obj;
   if(index>=0){
       obj=books[index]  
       obj.name=name
       obj.author=author
       obj.edition=edition
   }
   return obj;
}

  module.exports = { addBook, allBooks, updateBook };


