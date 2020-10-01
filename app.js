var express = require('express');
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var homeroutes = require("./routes/home");
var path =  require("path");

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(homeroutes);

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log('server has started');
});

module.exports = app;