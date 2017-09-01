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
    req.session.destroy()
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
  if (!foundUsr) {
    // sesh.usr = { username: foundUsr.username }
    res.redirect('/incorrectpw')
  } else if (!foundPW){
    // sesh.usr = { password: foundPW.password }
    res.redirect('/incorrectpw')
  } else {
    req.session.usr = foundUsr
    res.redirect('/home')
  }
})

// app.post('/login', function (req, res) {
//   const sesh = req.session
//   const foundUsr = dal.getUserByUsername(req.body.username)
//   const foundPW = dal.getUserPassword(req.body.password)
//   if (!foundUsr && req.isAuthenticated === false) {
//     // sesh.usr = { username: foundUsr.username }
//     res.redirect('/incorrectpw')
//   } else if (!foundPW && req.isAuthenticated === false){
//     // sesh.usr = { password: foundPW.password }
//     res.redirect('/incorrectpw')
//   } else if (foundPW && foundUsr && req.isAuthenticated === true){
//     res.redirect('/home')
//   }
// })

app.get ("/home", function(req,res){
  console.log('req.usr', req.session.usr)
    if (req.isAuthenticated){
     return res.render('home', { name: req.session.usr.username})
    }
      res.render('login')

})

// setting up port

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('App is working, dude man.')
})