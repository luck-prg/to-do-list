import Alert from './alert.js';

export default class Edit {

	constructor(){
		this.modal = document.getElementById("modal");
		this.modal__close = document.getElementById("close__modal");
		this.text__edit = document.getElementById("text__edit");
		this.description__edit = document.getElementById("description__edit");
		this.button__edit = document.getElementById("edit");
		this.alert = new Alert('alert__modal');
	}
	
	
	openAndCloseTodo(){
		this.modal.style.display = "flex";
		this.modal__close.onclick = ()=>{
			this.modal.style.display = "none";
		}
	}

	editTodo(id,todo,callback){
		this.text__edit.value = `${todo.title}`;
		this.description__edit.value = `${todo.description}`;

			this.alert.hide();
			const todo__editado = todo;
			this.button__edit.onclick = ()=>{
				if(this.text__edit.value === '' || this.description__edit.value === ''){
					this.alert.show();
					}
				else{
				callback(text__edit.value,description__edit.value,id);
				const todo__editado = document.getElementById(id);
				todo__editado.children[2].innerText = text__edit.value;
				todo__editado.children[3].innerText = description__edit.value;
				this.modal.style.display = "none";
				console.log("funciona");
			}
		}
	}


}