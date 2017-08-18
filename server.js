// const variables

const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const dal = require('./dal');
const bodyParser = require('body-parser')

// setting up mustache basics

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// set up public folder for css  

app.use(express.static('public'));

// set up bodyParser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// set up routes 

// // route to the login page when you first nav to the site (not logged in yet)

app.get ("/", function(req, res){
    res.redirect('/login')
})

app.get ("/login", function(req, res){
    res.render('login')
})

app.post ("/login", function(req,res){
    res.redirect('home')
})

app.get ("/home", function(req,res){
    res.render('home')
})

/*

this allows you to go to home page but still stays on the login url

    app.get ("/", function(req, res){
    res.redirect('/login')
})

app.get ("/login", function(req, res){
    res.render('login')
})

app.post ("/login", function(req,res){
    res.redirect('home')
})

app.get ("/home", function(req,res){
    res.render('home')
})
*/ 

// setting up port

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('App is working, dude man.')
})