var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.redirect('login.html');
  //res.sendFile('registered.html');

});

module.exports = router;
