var express = require( "express" );
var load  = require( "express-load" );
var bodyParser = require( "body-parser" );
var config = require( "./config" );

module.exports = function() {
    var app = express();
	app.set( "port", config.port );
    app.use( express.static( "./public" ) );    
    app.set( "views", "./app/views" );
	app.set( "view engine", "jade" );
    app.use( bodyParser.urlencoded( { extended : true } ) );
    app.use( bodyParser.json() );
    app.use( require( "method-override" )() );
	
	app.use( bodyParser.urlencoded( { extended : true } ) );
    app.use( bodyParser.json() );
    app.use( require( "method-override" )() );

    load( "models", { cwd : "app" } )
        .then( "controllers" )
        .then( "routes" )
		.then( "models" )
        .into( app );

    return app;
};

