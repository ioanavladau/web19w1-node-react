const express = require("express");
const app = express();
const path = require("path");

// create GET request
// app.get("/path", function(req, res) 

// app.get("/", function(req, res){
//     res.send({
//         "message": "Hi there, I am using express"
//     });
// });

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});


app.listen(3000, function(error){
    if (error) {
        console.log("Error running my server ", error);
    }
    console.log("Server is running on port 3000");
});