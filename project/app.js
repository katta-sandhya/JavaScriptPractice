var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');//npm module
//var session = require('express-session');
//const methodOverride = require('method-override');
//const mysql = require('mysql2');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const studentRouter = require('./routes/studentRouter.js'); 
const mysqlOperations = require('./routes/mysqlOperations.js');
const insert = require('./routes/insert.js');
const updateOperation = require('./routes/updateOperation.js');
const deleteOperation = require('./routes/deleteOperation.js');
const admin_login = require('./routes/admin_login.js');
const user_login = require('./routes/user_login.js');

const study_link_admin = require('./routes/study_link_admin.js');
const study_link_user = require('./routes/study_link_user.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//to understand the url
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/details', studentRouter);
app.get('/find', mysqlOperations);//select * 
app.post('/insert', insert);//insert
app.put('/update', updateOperation);//update
app.delete('/delete', deleteOperation);//delete

app.get('/admin_login', function(req, res) {
  res.render('admin_login');
});

app.get('/user_login', function(req, res) {
  res.render('user_login');
});
app.post('/admin_login', admin_login);
app.post('/user_login', user_login);

app.get('/study_link_admin', study_link_admin);
app.post('/study_link_admin/addLinks', study_link_admin);
app.post('/study_link_admin/updateLinks', study_link_admin);
app.post('/study_link_admin/deleteLinks', study_link_admin);
app.get('/study_link_user', study_link_user);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
 // res.render('error');
 res.send('Error occurred: ' + err.message);
});

module.exports = app;
