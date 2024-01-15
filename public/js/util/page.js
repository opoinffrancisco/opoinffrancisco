var pagina = function () {
	
	var cambiar = function (contenedor_, pagina_, url_mostrar_) {

		if (url_mostrar_!=null) {
			history.pushState(null, "", url_mostrar_);
		};
		
	}



	return{
		Inicio : function () {
			
		},

	}
}();