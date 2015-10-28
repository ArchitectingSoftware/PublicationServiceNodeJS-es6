
/**
 * Module dependencies.
 */
"use strict";

var express=require('express');
var routes = require('./routes');
var user = require('./routes/user');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');



var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

var services = require('./services')(app);

var server = app.listen(app.get('port'), ()=> {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
//var server = app.listen(app.get('port'), function () {
//  var host = server.address().address;
//  var port = server.address().port;
//
//  console.log('Example app listening at http://%s:%s', host, port);
//});
