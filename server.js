var express  = require('express');

var app = require('./custom/index.js');

app.use('/',express.static(__dirname + '/website'));

process.on('uncaughtException', function (err) {

    console.log(err)
});



app.listen( (process.env.PORT || 4242), function(){
console.log("Express server listening on port " + (process.env.PORT || 4242));
})
