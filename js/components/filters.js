export default class Filters{
	constructor(){
		this.form = document.getElementById('filter');
	}

	onClick(callback){
		this.form.onclick = (e)=>{
			const todos = callback();
			var tipe__filter = e.target.value;
			console.log(todos);
			switch(tipe__filter){
				case "all":
					this.searchTodo(todos,(todo,todo__final)=>{
						todo__final.style.display = 'grid';
					});

					break;
				case "completed":
					this.searchTodo(todos,(todo,todo__final)=>{
						if(todo.completed === false){
							todo__final.style.display = 'none';
						}
						else{
							todo__final.style.display = 'grid';
						}
					});

					break;
				case "uncompleted":
					this.searchTodo(todos,(todo,todo__final)=>{
						if(todo.completed === true){
							todo__final.style.display = 'none';
						}
						else{
							todo__final.style.display = 'grid';
						}
					});
					break;

			}
		}

	}

	searchTodo(todos,callback){
		todos.forEach((todo) => {
			const todo__final = document.getElementById(todo.id);
			callback(todo,todo__final);
		});
		
	}

}


