//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


let items = [];

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    let day = date.getDate();
    res.render('list', {listTitle: day, newListItems: items});
});

app.post('/', (req, res) => {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render('about');
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
})