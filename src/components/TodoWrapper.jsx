import React, {useState} from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
      setTodos([todos])
      console.log(todos)
    }

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <ul id="taskList">
        {/* Las tareas se añadirán aquí dinámicamente */}
      </ul>
    </div>
  )
}
