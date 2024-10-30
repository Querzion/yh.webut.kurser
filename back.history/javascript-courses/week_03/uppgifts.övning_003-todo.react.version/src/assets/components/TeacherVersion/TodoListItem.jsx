const TodoListItem = ({ todo, removeTodo, toggleComplete }) => {
    return (
      <li className={`todo ${todo.completed ? 'completed' : ''}`}>
        <p className="title" onClick={() => toggleComplete(todo)}>{ todo.title }</p>
        <button onClick={() => removeTodo(todo.id)}>X</button>
      </li>
    )
  }
  export default TodoListItem