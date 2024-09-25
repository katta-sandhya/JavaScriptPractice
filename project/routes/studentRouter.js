var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/details', function(req, res, next) {
 
  /*const cookieValue = {
    email:"aa@gmail.com",
    password:"asdfg"
}
res.cookie('loggedIn', cookieValue, {maxAge: 10000, secure:false, httponly:false});*/


  res.render('details', { title: 'Express' });
});

module.exports = router;
