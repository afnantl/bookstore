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


//############### GET #################
  function getBook(req,res,next){
    try{
      return books;
    }
    catch(error){
      return "something went wrong.." + '=>'+ error.message;
      // res.status(404).send("Oh uh, something went wrong");
    }
  }

var i = 0;
//############### POST #################
  function addBook(req){
  try{
    if(!req.body.name || !req.body.author || !req.body.edition){
      return "field is required.."; 
    }
    let newBook = {
      id: books.length+1,
      name:req.body.name,
      author:req.body.author,
      edition:req.body.edition
      }
      books.push(newBook);
      return newBook;
  }catch(error){
    return "something went wrong.." + '=>'+ error.message;
  }
}

//############### UPDATE #################
  function updateBook(req,res){
    const id=req.params.id   
    
    //Throw error if no id identify in url
    if (!id) {
      return "id is missing.."; 
    }
    
    try{
      //read data 
      let name=req.body.name  
      let author=req.body.author
      let edition=req.body.edition

      //find the given id in url
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
          return objs;
      }
      // else{
      //     res.error(404)  
      // }
    }catch(error){
      return "something went wrong.." + '=>'+ error.message;
    }
  }


//############### DELETE #################
  function deleteBook(req){
    let id=req.params.id;

    //Throw error if no id identify in url
    if (!id) {
      return "id is missing.."; 
    }

    try{
      //find the given id in url
      let index=books.findIndex((book)=>{
          return (book.id==Number.parseInt(id))
      })
      if(index>=0){
          let obj=books[index]
          //splice is used to delete from array
          books.splice(index,1)
          return obj;
      }
    }catch(error){
      return "something went wrong.." + '=>'+ error.message;
    }
  }
  
    module.exports = { addBook, getBook, updateBook, deleteBook };
