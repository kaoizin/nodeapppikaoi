module.exports = function(app){
	
	var usuarios = app.controllers.UsuarioController;	
	
	app.get('/', usuarios.index);
	app.route('/create').get(usuarios.create);
	app.get('/', usuarios.index);
}