// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    // Check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    // Delete
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        // Wait till the transition finished then execute the callback
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Check Mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        } 
    });
}