// import and instantiate express

// const app = require("express")();

const express = require("express");
const app = express();

// allow to serve static files from here
// app.use(express.static('../public'));
app.use(express.static('public'));

// query string
// REQ.QUERY question mark, key-value pairs

// /about?firstName=____&lastName=_____
// app.get('/about', (req, res) => {
//     res.send(req.query.firstName + " " + req.query.lastName);
// });

const data = require('./data.json');

app.get('/about', (req, res) => {
    // res.send(req.query.firstName + " " + req.query.lastName);
    res.header("Content-Type",'application/json');
    res.json(data);
    // res.send("Ioana Vladau");
});

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/../public/index.html");
// });

// app.get("/", (req, res) => {
//     res.status(404).send("try");
// });

// URL parameter
// REQ.PARAMS is with :
app.get("/age/:myAge/:height", (req, res) => {
    res.send(req.params);
    res.send(req.params.myAge);
    res.send(req.params.height);
});

// add app.listen() on port 3000 with a startup message
const server = app.listen(3000, error => {
    if (error) {
        console.log("Error running my server ", error);
    }
    console.log("Server is running on port ", server.address().port);
});
