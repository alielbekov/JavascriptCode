const todoList = JSON.parse(localStorage.getItem('todoList')) || [ {
  name:'make dinner',
  dueDate: '2024-10-01'
 }, {
  name: 'wash dishes',
  dueDate: '2024-10-01'
}]

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button class="delete-button" 
        onclick="
        todoList.splice(${index}, 1);
        renderTodoList();

        saveToStorage();
        " class="delete-todo-button">Delete
      </button>
    `
    todoListHTML += html;
  })

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML
}

function costKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function addTodo(){
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = "";

  renderTodoList();

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}