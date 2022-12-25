import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const todos = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false
  }
]

export const TodoApp = () => {
  // Si tengo mas de un useReducer en el mismo functional component, le podemos poner dipatchTodo.
  // Pero como es uno solo, solo le ponemos dispatch.
  // const [state, dispatch] = useReducer(todoReducer, todos)

  const handleNewTodo = (todo) => {
    console.log({ todo })
  }

  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
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
