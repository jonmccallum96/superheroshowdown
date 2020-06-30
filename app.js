const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const superheroes = require("superheroes")
const supervillains = require("supervillains")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');



app.get("/", function(req, res){

    const hero = superheroes.random();
    const villain = supervillains.random();

    res.render("supers", {hero: hero, villain: villain});
});

app.post("/", function(req, res){

    const hero = superheroes.random();
    const villain = supervillains.random();

    res.render("supers", {hero: hero, villain: villain});

})

app.listen(3000, function(){
    console.log("listenting on 3000");
});

