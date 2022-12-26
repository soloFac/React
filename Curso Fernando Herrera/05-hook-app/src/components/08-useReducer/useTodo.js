import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = []

// Inicializamos el estado con el valor que tengamos en el localStorage.
const init = () => {
  // la primera vez que se cargue el navegador, todos va a ser nulo.
  return JSON.parse(localStorage.getItem('todos')) || []
}

const useTodo = () => {
  // Si tengo mas de un useReducer en el mismo functional component, le podemos poner dipatchTodo.
  // Pero como es uno solo, solo le ponemos dispatch.
  const [todos, dispatch] = useReducer(todoReducer, initialState, init) // init es la funcion que se encarga de inicializar el estado.

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    // dispatch es la funcion que se encarga de disparar la accion.
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || [])
  }, [todos])

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo
  }
}

export default useTodo
