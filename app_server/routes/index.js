require('../models/db');
var express = require('express');
var router = express.Router();
var ctrlmain = require('../controller/main');
var passport = require('passport');
var Account = require('../models/account');
// var adduser = require('../controller/register');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

router.get('/register', function(req, res) {
  res.render('register', {});
});

router.post('/register', function(req, res, next) {
  console.log('registering user');
  if (req.body.password == req.body.repassword)
  {
  Account.register(new Account({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');

    res.redirect('/');
    });
  }
  else{
    console.log('Password Not Match');
    res.redirect('/register');
  }
});

router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
