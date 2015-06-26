var http = require( "http" );
var express = require( "express" );
var app = require( "./config/express" )(app);
var config = require('./config/config');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeapppikaoi', function(err){
  if (err){
    console.log('Erro ao conectar no mongodb: '+err);
  }else{
	console.log('Mongo conectado com sucesso');
  }
});

http.createServer( app ).listen( config.port, config.address, function(request,response) {
    console.log('Express Http Server ' +
        config.address + ' escutando na porta ' + config.port);
});

