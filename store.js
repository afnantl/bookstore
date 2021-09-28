const express=require('express');
const app=express();
const books=require('./books');
app.use(express.json());

var i = 0; //Auto increment id

// //#################### GET  ##########################
app.get('/allbooks',async function(req,res){
    res.json({books});
});


// //#################### POST  ##########################
app.post('/add',async (req, res) => {

    let newBook = {
    "id":++i,
    "name":req.body.name,
    "author":req.body.author,
    "edition":req.body.edition
    }
    books.push(newBook);
    console.log(books);
    res.json(newBook);
})



// //#################### PUT  ##########################
app.put('/books/:id',function(req,res){
    //reading id called params
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
        res.json(obj) 
    }else{
        //else pass error
        res.error(404)  
    }
})

//#################### DELETE  ##########################
app.delete('/books/:id',function(req,res){
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

app.listen(8000,()=>{
    console.log('listening to port 8000');
})
