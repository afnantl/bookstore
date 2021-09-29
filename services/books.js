const books=[{
    "id": 1,
    "name": "Celestial Bodies",
    "author": "Jokha Alharthi",
    "edition": "2018",
  },{
    "id": 2,
    "name": "Mind-Master",
    "author": "Viswanathan Anand ",
    "edition": "2016",
  },{
    "id": 3,
    "name": "Overstory",
    "author": "Richard Powers",
    "edition": "2014",
  },]

  var i = 0;
//############### POST #################
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

  //############### GET #################
  function getBook(req){
    return books;
  }

//############### UPDATE #################
  function updateBook(req,res){
    const id=req.params.id   
    //read data 
    let name=req.body.name  
    let author=req.body.author
    let edition=req.edition

    //pass function "students"
    let index=books.findIndex((book)=>{  
        //read index  parse convert string to number
        return(book.id==Number.parseInt(id)) 
    })
    if(index>=0){
         // object
        let obj=books[index]  
        obj.name=name
        obj.author=author
        obj.edition=edition
        //send updated data
        return obj;
    }else{
        //else pass error
        res.error(404)  
    }
  }

  //############### DELETE #################
  function deleteBook(req,res){
    let id=req.params.id;
    let index=books.findIndex((book)=>{
        return (book.id==Number.parseInt(id))
    })
    if(index>=0){
        let obj=books[index]
//splice is used to delete from array
        books.splice(index,1)
        return obj;
    }else{
        res.status(404)
    }
  }
  
    module.exports = { addBook, getBook, updateBook, deleteBook };
