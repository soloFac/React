import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }
]

// Inicializamos el estado con el valor que tengamos en el localStorage.
const init = () => {
  // la primera vez que se cargue el navegador, todos va a ser nulo.
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  // Si tengo mas de un useReducer en el mismo functional component, le podemos poner dipatchTodo.
  // Pero como es uno solo, solo le ponemos dispatch.
  const [todos, dispatch] = useReducer(todoReducer, initialState, init) // init es la funcion que se encarga de inicializar el estado.

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || [])
  }, [todos])

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

  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={ handleDeleteTodo }
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd
            handleNewTodo={handleNewTodo}
          />
        </div>

      </div>
    </>
  )
}

export default TodoApp
