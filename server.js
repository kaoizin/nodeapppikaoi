var http = require( "http" );
var express = require( "express" );
var app = require( "./config/express" )(app);
var config = require('./config/config');

http.createServer( app ).listen( config.port, function() {
    console.log('Express Http Server ' +
        config.address + ' escutando na porta ' + config.port);
});

//app.listen(port, function() {
//    console.log('Our app is running on http://localhost:' + port);
//});
