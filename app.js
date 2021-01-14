
var express = require('express');
const bodyPareser = require('body-parser');
const app = express();
var session = require("express-session");
var mysqlstore = require("express-mysql-session")(session);




//middle ware / routing



app.listen(3001, function(){console.log('My server is ruinning on port 3001');});



//npm install  express-session express-mysql-session
//npm i mutler
//npm install sharp






var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var postRouter = require('./routes/posts');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var sessionStore = new mysqlstore({/*using defulat options*/ },require('./conf/database'));
var sessionOptions = {
    key:"cscid",
    secret:"this is a super secrect for csc317",
    store:sessionStore,
    cookie:{secure:false,httpOnly:false,maxAge:900000},
    resave:false,
    saveUninitialized:false
}
app.use(session(sessionOptions));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users',userRouter);
app.use('/posts',postRouter); 
app.use(function(err,req,res,next)
{
    console.log(err);
    res.sendFile("error.html",{root:"public/html"});
});

module.exports = app;
