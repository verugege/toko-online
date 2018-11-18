var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
var config = require("./config/database");
var bodyParser = require("body-parser");
var session = require("express-session");

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
var adminPages = require("./routes/admin_pages.js");

// redirect 
app.use('/', pages);
app.use("/admin/pages", adminPages);

/** MIDDLEWARE */
// Setup body parser midleware
app.use(bodyParser.urlencoded({extended:
  false
}));
app.use(bodyParser.json());

//setup session middleware 
//fungsinya pengamnan session user
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true}
  })
);

//setup server
var port = 3000;
app.listen(port,function(){
console.log("Server Runnning Port " + port);
});