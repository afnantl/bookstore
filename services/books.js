const books=[];
var i = 0;

//############### GET #################
  function getBook(next){
  try{
    return {"msg":"success", "data":books};
  }
  catch(error){
    return {"status":"400","msg":"something went wrong.." + '=>'+ error.message};
  }
}

//############### POST #################
function addBook(req){
  try{
    if(!req.body.name || !req.body.author || !req.body.edition){
      throw "field is required.."; 
    }
    let newBook = {
      id: books.length+1,
      name:req.body.name,
      author:req.body.author,
      edition:req.body.edition
      }
      books.push(newBook);
      return {"msg":"success","data":newBook};
  }catch(error){
    return {"status":"404", "msg":error};
  }
}

//############### UPDATE #################
function updateBook(req,res){
  const id=req.params.id   
  
  //Throw error if no id identify in url
  if (!id) {
    return {"status":"404", msg:"id is missing.."}; 
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
       return {"msg":"success","data":obj};
    }
  }catch(error){
    return {"status":"400","msg":"something went wrong.."};
  }
}

//############### DELETE #################
function deleteBook(req){
  let id=req.params.id;

  //Throw error if no id identify in url
  if (!id) {
    return {"status":"404", msg:"id is missing.."}; 
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
    return {"status":"400","msg":"something went wrong.."};
  }
}
  
    module.exports = { addBook, getBook, updateBook, deleteBook };
