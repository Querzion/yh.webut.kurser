import TodoListItem from "./TodoListItem"

const TodosList = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <ul id="todosList" className="todos-list">

      {
        todos.map(todo => <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />)
      }
      

    </ul>
  )
}
export default TodosList