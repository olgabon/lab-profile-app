var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
  debugger
  res.send("this page is ok")
});

module.exports = router;
