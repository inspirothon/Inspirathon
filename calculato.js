const express = require("express");

const app = express();

app.get("/calci", function(req , res){
    res.send("Hello Tamanna");
});

app.listen(3000, function(){
    console.log("server started at port  no 4000");
});