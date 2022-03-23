export default class Model {
	constructor(){
		this.view = null;
		this.todos = JSON.parse(localStorage.getItem('todos'));
		if (!this.todos || this.todos.length < 1){
			//si no hay todos
			// se agrega en todos una lista(un array) 
			// que va tener objetos 
			this.todos = [
				{
					id: 0,
					title: 'Realiza tu primera tarea',
					description: 'Ingresa en titulo el titulo de tu tarea y luego en desarrollo el procedimiento o instrucciones necesarias',
					completed: false,
				}
			]
			this.currentId = 1;
		} else{
			this.currentId = this.todos[this.todos.length -1].id +1;
			// al utimo todo le sumo uno
			// siempre que se agrega pasa esto.
		}
	}

	setView(view){
		this.view = view;
	}

	getTodos(){
		return this.todos;
	}

	findTodo(id){
		return this.todos.findIndex((todo) => todo.id === id);
	}

	toggleCompleted(id){
		console.log(id);
		const index = this.findTodo(id);
		const todo = this.todos[index];
		todo.completed = !todo.completed;
		console.log(this.todos);
		this.save();
	}

	addTodo(title, description){
		const todo = {
			id: this.currentId++, // cuando el proximoo se añade se agrega 1  
			title: title,
			description: description,
			completed: false,
		}
		this.todos.push(todo);
		console.log(this.todos);
		this.save(); // guarda en el navegador el todo
		return {...todo} // Object.assign({}, todo);
		// expande las propiedades del objeto
		// hace un con del objeto en otro objeto
	}

	remove_Todo(id){
		const index = this.findTodo(id);
		// este metodo FINDINDEX
		// lo que hace es buscar en todos los valores de todos un todo
		// busca el todo que this.id === id
		console.log(this.todos[index]);
		this.todos.splice(index,1); // borra el elemento desde el index con una cantiodad de 1 elemeno
		this.save(); 
		/* 
		Lo que pasa aca es lo siguiente:
		- se borra la tarea de la lista
		- y el save lo que hace es ver la lista y almacenarla en el localStorage
		- asi como esta.
		*/

	}

	/* json es un formato de java, un objeto*/

	save(){
		// funcion para almacenar en el navegador
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	editTodo(title,description,id){
		const todo = this.todos[id];
		todo.title = title;
		todo.description = description;
		this.save();
		console.log(this.todos);
	}


}