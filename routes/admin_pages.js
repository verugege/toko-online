var express = require('express');
var router = express.Router();

//setup index dengan metode send
router.get('/', function(req, res){
  res.send("Admin Area bosque");
  });

// exports
module.exports = router;