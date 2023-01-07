import React from 'react'
import { useGetTodosQuery } from './store/apis'

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery()
  console.log(todos, isLoading)

  return (
    <>
      <h1>todos - RTK Query</h1>
      <hr />
      <h4>isLoading... {isLoading ? 'True' : 'False'} </h4>

      <pre>...</pre>

      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
              {todo.title}
            </li>
          ))
        }
      </ul>

      <button>Next Todo</button>
    </>
  )
}
