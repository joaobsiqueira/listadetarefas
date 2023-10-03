import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
   const [valor, setValor] = useState("")

   const handleSubmit = e => {
    e.preventDefault();

    addTodo(valor);

    setValor("")
   }

    return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input'
        value={valor} 
        placeholder='Quais são as tarefas de hoje?' 
        onChange={(e) => setValor(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            Adicionar tarefa
        </button>
    </form>
  )
}
