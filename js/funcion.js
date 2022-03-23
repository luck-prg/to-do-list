
document.addEventListener('DOMContentLoaded', function(){
	// esto significa que no carga el js hasta que se cargue toda la pagina
	// para que no existan errores
	//El DOM es el HTML pero representado como objetos
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const btn = document.getElementById('add');
	const table = document.getElementById('table');
	const alert = document.getElementById('alert');
	let id =1;

	btn.onclick = function(){
		console.log('Title:',title.value);
		console.log("description:",description.value);
		addTodo();

		/* si a hago esto: const elemento = addTodo();
			Me devuelve el valor de retorno de la funcion y eso en este caso
			esta mal porque no hay retorno y devuelve UNDIFINED 

			entonces en casos cuando tengo que igualar un elemento a una funcion y solo la quiero llamar
			se pone el nombre de la funcion asi:
			const elemento = addTodo;
		*/
	}

	function addTodo(){
		if(title.value === '' || description.value === ''){
			console.error("title and description are required");
			alert.style.display  = "block";
			return;
		} 
		console.log("ok");
		alert.style.display  = "none";
		const row = document.createElement("div");
		row.setAttribute('id',id++);
		row.classList.add('fila__tarea');
		row.innerHTML = `		
							<div class="caja__title">
								<h4 class="title__tarea">${title.value}</h4>
							</div>
							<div class="caja__paragraph">
								<p class="description">${description.value}</p>
							</div>
							<div class="todo__completed">
								
							</div>
							<div class="buttons__edit">
								<div class="edit">
									<i class='bx bx-pencil'></i>
								</div>
								<div class="remove">
									<i class='bx bx-trash' ></i>
								</div>
							</div>
							`;

		table.appendChild(row);

		const removeBtn = document.createElement("div");
		removeBtn.classList.add("remove");
		removeBtn.innerHTML = `<i class='bx bx-trash' ></i>`;
		row.children[3].appendChild(removeBtn);
		removeBtn.onclick = function(e){
			console.log("borrando fila");
			removeTodo(row.getAttribute('id'));
		}

		const checkBox = document.createElemente("input");
		checkBox.type = "checkbox";
		checkBox.checked = todo.completed;
		row.children[2].appendChild(checkBox);
		checkBox.onClick = () => 



	}


	function removeTodo(id){
		console.log(id);
		document.getElementById(id).remove();
	}


});


