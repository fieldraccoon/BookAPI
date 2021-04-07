const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var path = require('path')

const app = express();

app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));


let posts = [];


const createRoute = require('./routes/Create');
app.use('/create', createRoute);


const booksRoute = require('./routes/books');
app.use('/books', booksRoute);


const homeRoute = require('./routes/home');
app.use('/', homeRoute);




app.listen(3000, () => {
    console.log("Running server on port 3000")
})