import { useState } from "react"

const AddTodoForm = ({ addTodo }) => {

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(title.trim() === '') return

    addTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" className="todo-input" value={title} onChange={e => setTitle(e.target.value)} />
      <button className="btn">ADD</button>
    </form>
  )
}
export default AddTodoForm