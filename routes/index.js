var express = require('express');
var router = express.Router();
var path = require("path");
var isLoggedIn = require('../middleware/routeprotectors').userIsloggedIn;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.sendFile('gallery.html',{root:'public/html'});
});
router.get('/registration', function(req, res, next) 
{
  res.sendFile('registration.html',{root:'public/html'});
  
  });
  router.get('/login', function(req, res, next) 
  {
    res.sendFile('login.html',{root:'public/html'});
  
  });
 router.get('/gallery',function(req,res,next)
 {
  res.sendFile('gallery.html',{root:'public/html'});
 });
router.get('/images',function(req,res,next)
{
  
  res.sendFile('csa.jpg,greenday-feat.jpg',{root:'Images/'});
  //res.sendFile('greenday-feat.jpg',{root:'Images/'});
});
  

router.use('/postimage',isLoggedIn); 
router.get('/postimage', function(req, res, next) {
  res.sendFile('postimage.html',{root:'public/html'});
  //res.sendFile('registered.html');

});
/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});


module.exports = router;
