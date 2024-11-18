import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm"
import TodosList from "./components/TodosList"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    setTodos(state => [...state, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(state => state.filter(todo => todo.id !== id))
  }

  const toggleComplete = (todo) => {
    todo.completed = !todo.completed
    setTodos(state => [...state])
  }

  return (
    <div className="container">
      <div className="paper">
        <AddTodoForm addTodo={addTodo} />
        <TodosList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  )
}
export default App