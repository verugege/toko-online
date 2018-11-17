var express = require("express");
var path = require('path');

//initial app
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup public folder untuk independent file seperti template dll

app.use(express.static(path.join(__dirname, 'public')));

// Setup Index dengan metode get
app.get('/', function(req, res){
  res.send("Ini adalah index");
});

/// Setup server
var port = 3000;
app.listen(port,function(){
  console.log("Server Running on Port " + port);
});