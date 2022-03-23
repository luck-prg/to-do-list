import Alert from './alert.js'

export default class AddTodo{

	// Atributos
	constructor(){
		this.btn = document.getElementById('add');
		this.title = document.getElementById('title');
		this.description = document.getElementById('description'); 
		this.alert = new Alert("alert");
	}

	// Metodos

	onClick(callback){ // onClick llama a otra funcion llamada Callback
		//calbaack es una funcion
		this.btn.onclick = () => { // cuando se clickee en el BTN, osea el boton ADD, o agregar TAREA
			if(this.title.value === '' || this.description.value === ''){
				this.alert.show();
				console.log("Incorrecto");
				
			// 	console.error("title and description are required");
			// 	alert.style.display  = "block";
			// 	return;
			}
			else{
				this.alert.hide();
				callback(this.title.value, this.description.value); // llama a la funcion callback y le pasa los valores
				// ingresados por el usuario del titulo y descripcion


			}
		}
	}
}