import React from 'react'
import ReactDOM from 'react-dom'
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen'
// import RealExampleRef from './components/04-useRef/RealExampleRef'
// import { Padre } from './components/07-tarea-memo/Padre'

import './components/08-useReducer/intro-reducer'
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import TodoApp from './components/08-useReducer/TodoApp'
import MainApp from './components/09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  // BrowserRouter es hoc (high order component), es decir, es un componente que envuelve a otro componente
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
