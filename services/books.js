const books=[];
var i = 0;

function addBook(req){
  try{
    if(!req.body.name || !req.body.author || !req.body.edition){
      throw "field is required.."; 
    }
    let newBook = {
      id: ++i,
      name:req.body.name,
      author:req.body.author,
      edition:req.body.edition
      }
      books.push(newBook);
      return {"msg":"success","data":newBook};
  }catch(error){
    return {"msg":"error", data: error};
  }
}

function allBooks(next){
    try{
      return {"msg":"success", "data":books};
    }
    catch(error){
      return {"msg":"error",data:error};
    }
  }

  function updateBook(req,res){
    const id=req.params.id   
    
    if (!id) {
      return {msg:"error", data:"id is missing.."}; 
    }
    if(!req.body.name || !req.body.author || !req.body.edition){
      return {msg:"error", data:"field is required.."}; 
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
         return {msg:"success",data:obj};
      }
    }catch(error){
      return {msg:"error",data:error};
    }
  }

function deleteBook(req){
  let id=req.params.id;

  //Throw error if no id identify in url
  if (!id) {
    return {msg:"error", data:"id is missing.."}; 
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
        return {msg:"success",data:obj};
    }
  }catch(error){
    return {msg:"error", data:error};
  }
}

  module.exports = { addBook, allBooks, updateBook, deleteBook };


