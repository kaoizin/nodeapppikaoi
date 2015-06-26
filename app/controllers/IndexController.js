module.exports = function( app ) {
    var controller = {
    
			layout : function(req, res){
				   res.render("layout");
			},
			index : function(req, res){
				   res.render("index");
			}		
			
	};
    return controller;
	
};
