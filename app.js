var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
var config = require("./config/database");

//connection syntax
mongoose.connect(config.database);

var db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));

db.once("open",function(){
console.log("Sudah Connect Ke Mongodb Coy config database");
});

//initial app
var app = express();


//view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//setup public folder untuk independent file seperti template dll

app.use(express.static(path.join(__dirname, 'public')));

// Set routes
var pages = require("./routes/pages.js");

// redirect 
app.use('/', pages);

//setup server
var port = 3000;
app.listen(port,function(){
console.log("Server Runnning Port " + port);
});