import React, { useState } from 'react'
import useForm from '../../hooks/useForm'

const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    handleNewTodo(newTodo)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='¿Que hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />

      <button
        type='submit'
        className='btn btn-outline-primary mt-1 btn-block'
      >
              Agregar
      </button>
    </form>
  )
}

export default TodoAdd
