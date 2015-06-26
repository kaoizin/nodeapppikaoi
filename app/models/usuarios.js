module.exports = function(){
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;

  var usuario = new Schema({
    nome: String,
	cpf: String,
    login: String,
    senha: String,
	telefone : String,
	email: String,
    dataNasc: Date
  });

  return mongoose.model('Usuarios', usuario);
}