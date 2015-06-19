var IndexController = require("../app/controllers/IndexController")()

var expect = require("expect");

describe("IndexController", function() {
	it("Espero quando passar 2 e 3 retorne 5", function() {
		var retorno = IndexController.sm(2,3);
		var esperado = 5;
		//var retorno = IndexController.somarNumero(2,3);
		//console.log("Retorno:", retorno);
		expect(retorno).toEqual(esperado);
	});
});
