var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));

console.log('Not required')
appget('/',function(request, response) {
  fs.readFile('indy.txt', function(err, out) {
    if(err) console.log(err);
    response.send(out.toString());
  });
});

exports.app = app;
