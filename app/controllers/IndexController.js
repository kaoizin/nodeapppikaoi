module.exports = function( app ) {
    var controller = {
    
			direcionarIndex : function(request, response){
				   response.render("index",{
					   mensagem : "Hello World"
				   });
			},
			direcionarMeuNome : function(request, response){
				   response.render("meu-nome");
			},
			meuNome : function(request, response){
				   var nome = request.body.nome;
				   response.render("meu-nome",{
					   nome : nome
				   });
			},
			direcionarSomar : function(request, response){
				   response.render("somar");
			},
			somar : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   var num2 = parseInt(request.body.num2);
				   
				   response.render("somar",{
					   resultado : somarNumero(num1,num2)
				   });
			},
			//get
			//controller.direcionarSomar = function(request, response){
			//                     view \/
			//	   response.render("somar");
			//};
			//post
			//controller.somar = function(request, response){
			//	   var num1 = parseInt(request.body.num1);
			//	   var num2 = parseInt(request.body.num2);
				   
			//	   response.render("somar",{
			//		   resultado : somarNumero(num1,num2)
			//	   });
			//};
			sm : function somarNumero(num1,num2){
				var resultado = num1 + num2;
				return resultado;
			}
	};
    return controller;
	
};
