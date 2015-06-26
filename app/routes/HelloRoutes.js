module.exports = function(app){
	var controller = app.controllers.IndexController;
	app.route('/').get(controller.layout);	
	app.route('/index').get(controller.index);
}