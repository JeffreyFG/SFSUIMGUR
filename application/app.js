
var express = require('express');
const bodyPareser = require('body-parser');
const app = express();




//middle ware / routing



app.listen(3001, function(){console.log('My server is ruinning on port 3000');});










var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registeredRouter = require('./routes/registered');
var registrationRouter =require('./routes/registration'); 
var loginRouter = require('.routes/login');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registered',registeredRouter);
app.use('/registration',registrationRouter);
app.use('/login',loginRouter);

module.exports = app;
