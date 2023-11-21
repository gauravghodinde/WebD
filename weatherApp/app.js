const express = require('express')

const app = express();



app.get("/",(req,res)=>{
    res.send("server is running FINE ")
})




app.listen(3000,()=>{
    console.log("server running on port 3000:");
    console.log("http://127.0.0.1:3000/");

});