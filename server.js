const express = require("express");
const app = express()
app.use(express.json());

var routes = require("./routes/allroutes");
app.use("/", routes);

app.listen(8000,()=>{
    console.log('listening to port 8000');
})


