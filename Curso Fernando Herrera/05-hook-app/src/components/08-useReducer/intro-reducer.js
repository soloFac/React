const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false
}]

// Reducer es una función pura que recibe el estado y la acción, y devuelve el nuevo estado, no muta el estado anterior, sino que crea uno nuevo.
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] add todo') {
    // utilizamos el SpreadOperator para no mutarlo
    return [...state, action.payload]
  }

  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
}

const addTodoAction = {
  // type es el nombre que se le da a la acción
  type: '[TODO] add todo',
  // payload es el nombre que se le da a la información que se envía
  payload: newTodo
}

todos = todoReducer(todos)
