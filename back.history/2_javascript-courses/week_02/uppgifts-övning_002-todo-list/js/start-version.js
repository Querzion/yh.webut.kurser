
// #############################################################################
// TODO LIST (FRÅN | DOM - SKAPA ELEMENT MED JAVASCRIPT) 
// #############################################################################

// DOM elements
const todoBox = document.querySelector("#todo-box");
const todoForm = document.querySelector('#todo-form');
const todoDiv = document.querySelector('#todos-field');
const todoInput = document.querySelector('#todo-input');

const deleteTodo = document.querySelector("#delete-btn");
const saveTodoList = document.querySelector("#save-todo-list-btn");

todoForm.addEventListener('submit', e => {
    e.preventDefault();

    if (todoInput.value === "") return; // if the input is empty, stop its output

    const newTodo = createTodoElement(todoInput.value);

    todoDiv.insertAdjacentElement("afterbegin", newTodo);
    todoInput.value = "";
});

// Export the createCommentElement function
function createTodoElement(value) {
    const todo = document.createElement('li');
    todo.classList.add("todo");

    const todoText = document.createElement("p");
    todoText.textContent = ` ${value}`;

    todo.appendChild(todoText);
    return todo;
}