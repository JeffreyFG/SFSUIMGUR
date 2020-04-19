var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/postimage', function(req, res, next) {
  res.redirect('postimage.html');
  //res.sendFile('registered.html');

});

module.exports = router;
