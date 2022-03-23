import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', function(){
	// Instancio 
	const model = new Model(); // modelo de base de datos
	const view = new View(); // Lo que se visualiza en la pantalla
	model.setView(view); // todos los metodos y atributos de view instanciado van a model
	view.setModel(model); // todos los metodos y atributos de model instanciado van a view

	view.render(); 
});

