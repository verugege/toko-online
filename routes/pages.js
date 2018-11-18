var express = require('express');
var router = express.Router();

//setup index dengan metode get
router.get('/', function(req, res){
  res.render("index",{
    title: "DewaBujang Shopping"
    });
  });

// exports
module.exports = router;