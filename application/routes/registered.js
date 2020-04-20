var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/registered', function(req, res, next) {
  res.redirect('/registered/registeredcomplete');
  //

});
router.get('/registeredcomplete',function(req,res,next){
    res.sendFile('registered.html',{root:'public/html'});
});

module.exports = router;
