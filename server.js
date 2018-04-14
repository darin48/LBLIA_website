var express = require('express');
var app = express(); 						// create our app w/ express
var http = require("http");
var fs = require('fs');
var morgan = require('morgan');
var port = 3000;
var serverUrl = "127.0.0.1";

console.log("dirname is: " + __dirname);
app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console

app.get('*', function(req, res){
  res.send("Error: no idea where " + req.url + " is!");
})

app.listen(port);
console.log("App listening on port " + port);

module.exports = app;
