import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setVale] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
  }

  return (
    <form id="taskForm" onSubmit={handleSubmit}>
      <label htmlFor="taskInput">Nueva Tarea:</label>
      <input type="text" id="taskInput" placeholder="Ingrese una nueva tarea" required onChange={(e) => setVale(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  )
}
