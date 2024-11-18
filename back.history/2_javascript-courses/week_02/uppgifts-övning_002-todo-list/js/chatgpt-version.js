// Array för att lagra alla todos
let todos = [];

// Funktion för att spara todos till localStorage
function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Funktion för att ladda todos från localStorage
function loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}

// Funktion för att skapa en ny todo
function addTodo(title) {
    const todo = {
        id: Date.now(), // Unik id baserat på tid
        title: title,
        completed: false
    };
    todos.push(todo);
    saveTodosToLocalStorage();
    renderTodos(); // Uppdatera vyn
}

// Funktion för att rendera alla todos i DOM:en
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Töm listan innan ny rendering

    todos.forEach(todo => {
        // Skapa ett nytt listobjekt för varje todo
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = todo.title;

        // Skapa knapp för att ta bort todo
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Ta bort';
        deleteBtn.addEventListener('click', () => removeTodo(todo.id));

        // Skapa checkbox för att markera som klar
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodoCompletion(todo.id));

        // Lägg till checkbox och knapp i listobjektet
        li.prepend(checkbox);
        li.appendChild(deleteBtn);

        // Lägg till listobjektet i todo-listan i DOM:en
        todoList.appendChild(li);
    });
}

// Funktion för att ta bort en todo
function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodosToLocalStorage();
    renderTodos(); // Uppdatera vyn
}

// Funktion för att markera todo som klar/oklar
function toggleTodoCompletion(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage();
        renderTodos(); // Uppdatera vyn
    }
}

// EventListener för att lägga till ny todo
document.getElementById('add-todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoTitle = todoInput.value.trim();
    if (todoTitle) {
        addTodo(todoTitle);
        todoInput.value = ''; // Rensa inputfältet
    }
});

// När sidan laddas, hämta eventuella todos från localStorage och rendera dem
window.addEventListener('load', function() {
    loadTodosFromLocalStorage();
    renderTodos();
});
