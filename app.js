const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const superheroes = require('superheroes');
const supervillains = require('supervillains');
const randomFont = require('random-font');
const _ = require('lodash');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');



app.get('/', function(req, res){

    const hero = _.upperCase(superheroes.random());
    const villain = _.upperCase(supervillains.random());
    const font1 = randomFont();
    const font2 = randomFont();
    res.render('supers', {hero: hero, villain: villain, font1: font1, font2: font2});
});


app.listen(3000, function(){
    console.log('listenting on 3000');
});

