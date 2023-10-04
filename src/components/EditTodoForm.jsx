import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
   const [valor, setValor] = useState(task.task)

   const handleSubmit = e => {
    e.preventDefault();

    editTodo(valor, task.id);

    setValor("")
   }

    return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input'
        value={valor} 
        placeholder='Atualizar tarefa' 
        onChange={(e) => setValor(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            Atualizar tarefa
        </button>
    </form>
  )
}