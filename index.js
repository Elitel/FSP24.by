var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();

var port = process.env.PORT || 3000;

//Static folder
app.use(express.static(__dirname + "/public"));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log('App listening...');
});
