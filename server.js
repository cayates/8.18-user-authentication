// const variables

const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const dal = require('./dal');
const bodyParser = require('body-parser')
const session = require('express-session')


// setting up mustache basics

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// set up public folder for css  

app.use(express.static('public'));

// set up bodyParser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// set up session

app.use(
    session({
      secret: 'test secret',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: null }
    })
  )

  app.use(function (req, res, next) {
    if (req.session.usr) {
      req.isAuthenticated = true
    } else {
      req.isAuthenticated = false
    }
    console.log(req.isAuthenticated, 'session')
    next()
  })

// set up routes 

// // route to the login page when you first nav to the site (not logged in yet)

app.get ("/", function(req, res){
    res.redirect('/login')
})

app.get ("/login", function(req, res){
    res.render('login')
})

// route for when someone logs in with either correct or incorrect creds 

app.get ("/incorrectpw", function(req, res){
    res.render('incorrectpw')
})

app.post('/login', function (req, res) {
    const sesh = req.session
    const foundUsr = dal.getUserByUsername(req.body.username)
    const foundPW = dal.getUserPassword(req.body.password)
    if (req.body.password === foundUsr && req.body.username === foundPW) {
      sesh.usr = { password: foundUsr.password}
      res.redirect('/home')
    } else {
      res.redirect('/incorrectpw')
    }
  })

// setting up port

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('App is working, dude man.')
})