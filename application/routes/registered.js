var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Registered', function(req, res, next) {
  res.sendFile('registration.html');
});

module.exports = router;
