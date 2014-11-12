var _args = arguments[0] || {};

Ti.API.info(JSON.stringify(_args));

$.mostrar = function (nombreApp){
	$.labelTitle.text = nombreApp;
};
