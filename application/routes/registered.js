var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/registered', function(req, res, next) {
  res.redirect('registered.html');
  //res.sendFile('registered.html');

});

module.exports = router;
