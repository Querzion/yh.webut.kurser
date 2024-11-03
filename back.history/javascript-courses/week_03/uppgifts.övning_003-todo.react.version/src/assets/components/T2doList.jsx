import React from 'react'
import TodoListItem from "./T2doListItem"

const T2doList = ({ t2dos, removeT2do, toggleComplete}) => {
    return (
        <ul id="todosList" className="todos-list">
            {
                t2dos.map(t2do => <TodoListItem key={t2do.id} t2do={t2do} removeT2do={removeT2do} toggleComplete={toggleComplete} />)
            }
        </ul>
    )
}

export default T2doList