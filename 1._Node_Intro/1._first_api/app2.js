const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, function(error){
    if(error){
        console.log("there is an error", error);
    }
    console.log("listening on port 3000");
});