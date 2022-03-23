
import AddTodo from './components/add_todo.js';

import Filters from './components/filters.js';

import Edit from './components/editi.js';

export default class View {
	// LLamo a todos los elementos HTML
	// Se ponen los eventos
	// se guarda en model, que es la base de datos

	//Atributos
	constructor(){
		this.model = null;
		this.table = document.getElementById('table'); // llamar a la tabla en este modulo
		// me sirve porque aca es donde se agrega para visualizar las tareas
		this.addTodoForm = new AddTodo(); // instancio Addtodo
		// osea AddTodoForm va a tener los atributos de btn, title y descripcion 
		this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
		// llamo al metodo onClick de la instancia addTodoForm, me pasa la funcion pero aun no conozco los valores
		// recien cuando se lee onClick y se llega a llamar a la funcion callback, que en este caso es toda esa cosa
		// recien ahi, se pasa el titulo y la descripcion y luego llama a la funcion addTodo de este modulo.
		this.editForm = new Edit();
		this.filter__todo  = new Filters();
		this.filter__todo.onClick(()=>this.filter_search());
		}

	// Metodos

	// filter_search(filter){
	// 	const todos_final = this.model.getTodos();
	// 	// this.model.findTodoCompleted(filter);
	// 	console.log("funca");
	// 	if(filter === "completed"){
	// 		todos_final.forEach((todo) => {
	// 			console.log("funca");
	// 			const tarea__incompleta = document.getElementById(todo.id);
	// 			if(todo.completed === false){
	// 				console.log("funca");
	// 				tarea__incompleta.style.display = 'none';
	// 			}
	// 			else{
	// 				tarea__incompleta.style.display = 'grid';
	// 			}
	// 		});
	// 	}
	// 	else if (filter === "uncompleted"){
	// 		console.log("funca");
	// 		todos_final.forEach((todo) => {
	// 			console.log("funca");
	// 			const tarea__incompleta = document.getElementById(todo.id);
	// 			if(todo.completed === true){
	// 				console.log("funca");
	// 				tarea__incompleta.style.display = 'none';
	// 			}
	// 			else{
	// 				tarea__incompleta.style.display = 'grid';
	// 			}
	// 		});
	// 	}

	// 	else {
	// 		console.log("funca");
	// 		todos_final.forEach((todo) => {
	// 			console.log("funca");
	// 			const tarea__incompleta = document.getElementById(todo.id);
	// 				console.log("funca");
	// 				tarea__incompleta.style.display = 'grid';
	// 		});
	// 	}
	// }

	filter_search(){
		const todos_final = this.model.getTodos();
		return todos_final;
	}

	setModel(model){
		this.model = model;
	}

	addTodo(title, description){
		const todo = this.model.addTodo(title,description);
		this.createRow(todo);
	}

	createRow(todo){
		console.log("Creado Tabla");
		// alert.style.display  = "none";
		const row = document.createElement("div");
		row.setAttribute('id', todo.id);
		row.classList.add('fila__tarea');
		row.innerHTML = `		
							
							<div class="buttons__edit">

							</div>
							<div class="todo__completed">
								
							</div>
							<div class="caja__title">
								<h4 class="title__tarea">${todo.title}</h4>
							</div>
							<div class="caja__paragraph">
								<p class="description">${todo.description}</p>
							</div>
							`;

		table.appendChild(row);

		const checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		checkBox.checked = todo.completed;
		checkBox.onclick = () => {
			console.log("Chekeando");
			this.toggleCompleted(todo.id);
		}
		row.children[1].appendChild(checkBox);

		const editBtn = document.createElement("div");
		editBtn.classList.add("edit");
		editBtn.innerHTML = `<i class='bx bx-pencil'></i>`;
		editBtn.onclick = () =>{ 
			// console.log("editando fila");
			this.editTodoView(todo.id);
		}
		row.children[0].appendChild(editBtn);

		const removeBtn = document.createElement("div");
		removeBtn.classList.add("remove");
		removeBtn.innerHTML = `<i class='bx bx-trash' ></i>`;
		removeBtn.onclick = () =>{ 
			console.log("borrando fila");
			this.removeTodo(todo.id);
		}
		row.children[0].appendChild(removeBtn);

		const openDescription = document.createElement("div");
		openDescription.classList.add("open");
		openDescription.innerHTML = `<i class='bx bx-book-open'></i>`;
		openDescription.onclick = () => {
			console.log("Abriendo");
			this.openTodoDescription(todo.id);
		}
		row.children[0].appendChild(openDescription);
	}

	toggleCompleted(id){
		this.model.toggleCompleted(id);
	}

	removeTodo(id){
		this.model.remove_Todo(id);
		document.getElementById(id).remove();
		// borrar primero de la base de datos
		// despues de la vista
	}

	// editTodo(id){
	// 	console.log("esto funciona");
	// 	const modal = document.getElementById("modal");
	// 	modal.style.display = "flex";
	// 	const modal__close = document.getElementById("close__modal");
	// 	modal__close.onclick = ()=>{
	// 		console.log("cerrando");
	// 		modal.style.display = "none";
	// 	}
	// 	const text__edit = document.getElementById("text__edit");
	// 	const description__edit = document.getElementById("description__edit");
	// 	const button__edit = document.getElementById("edit");
	// 	const todos = this.model.getTodos();
	// 	const todo = todos[id];
	// 	console.log(todo);
	// 	text__edit.value = `${todo.title}`;
	// 	description__edit.value = `${todo.description}`;

	// 	edit.onclick = ()=>{
	// 		this.model.editTodo(text__edit.value,description__edit.value,id);
	// 		const todo__editado = document.getElementById(id);
	// 		todo__editado.children[2].innerText = text__edit.value;
	// 		todo__editado.children[3].innerText = description__edit.value;
	// 		modal.style.display = "none";
	// 	}

	// }

	editTodoView(id){
		const todos = this.model.getTodos();
		const todo = todos[id];
		this.editForm.openAndCloseTodo(id);
		this.editForm.editTodo(id,todo,(text,description,id)=>this.model.editTodo(text,description,id));
	}

	render(){
		const todos = this.model.getTodos();
		
		// for(const todo of todos){
		// 	this.createRow(todo);
		// }
		// el de arriba pasa por todos los valores de todos y los devuelve con el ombre todo
		// el de abajo hace lo mismo

		todos.forEach((todo) => this.createRow(todo));
	}

	openTodoDescription(id){
		const todo = document.getElementById(id);
		if(todo.children[3].style.display === "none"){
			todo.children[2].style.display = "none";
			todo.children[3].style.display = "block";
		}
		else{
			todo.children[2].style.display = "block";
			todo.children[3].style.display = "none";
		}	
	}
}