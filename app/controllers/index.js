$.windowMain.open();

var modulosApp = [
	{"id" : "com.practica05.widgetMosaico", "nombre" : "miPolicia", "xml" : "mosaicoMiPolicia","activo" : false},
	{"id" : "com.practica05.widgetMosaicoSAC", "nombre" : "SAC", "xml" : "mosaicoSAC", "activo" : true},
];

/*******/
for (var i=0; i < modulosApp.length; i++) {
	if (modulosApp[i].activo){
		// $.mosaico.mostrar(modulosApp[i].nombre);
		var appView = Alloy.createController(modulosApp[i].xml).getView();
		$.windowMain.add(appView);
	}	
};

/*******/

