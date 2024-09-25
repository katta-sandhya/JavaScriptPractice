var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Check login route
router.post('/checkLogin', function(req, res, next) {
  // Logic for checking login can be implemented here
  res.render('welcome', { msg: 'Login Successful!' });
});

// Check welcome route
router.post('/checkWelcome', function(req, res, next) {
  res.render('welcome', { msg: 'Welcome to the Banking Application' });
});

module.exports = router;
