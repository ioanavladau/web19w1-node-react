// import and instantiate express

// const app = require("express")();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// allow to serve static files from here
app.use(express.static('public'));

// query string
// REQ.QUERY "?", key-value pairs

// /about?firstName=____&lastName=_____
// app.get('/about', (req, res) => {
//     res.send(req.query.firstName + " " + req.query.lastName);
// });



app.get("/", function(req, res){
    res.sendFile(__dirname + "/../public/index.html");
});


app.get('/about', (req, res) => {
    const response = {
        firstName: "Ioana",
        lastName: "Vladau"
    };
    res.json(response);
});




// const data = require('./data.json');

// app.get('/about', (req, res) => {
//     // res.send(req.query.firstName + " " + req.query.lastName);
//     res.header("Content-Type",'application/json');
//     res.json(data);
//     // res.send("Ioana Vladau");
// });




// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/../public/index.html");
// });




// app.get("/", (req, res) => {
//     res.status(404).send("try");
// });




// URL parameter
// REQ.PARAMS is with :
// app.get("/age/:myAge/:height", (req, res) => {
//     res.send(req.params);
//     res.send(req.params.myAge);
//     res.send(req.params.height);
// });




app.post("/myfavoriteanimal", (req, res) => {
    console.log("Here is the body: ", req.body);
    res.send("Your favorite animal is " + req.body.favoriteAnimal);
});






// add app.listen() on port 3000 with a startup message
const server = app.listen(3000, error => {
    if (error) {
        console.log("Error running my server ", error);
    }
    console.log("Server is running on port ", server.address().port);
});
