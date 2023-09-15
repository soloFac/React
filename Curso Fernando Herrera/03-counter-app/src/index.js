import React from 'react'
import ReactDOM from 'react-dom'
import FirstApp from './FirstApp'
// import CounterApp from './CounterApp';
import './index.css'

const divRoot = document.querySelector( '#app' )

// ReactDOM.render( <PrimeraApp saludo="Hola, soy Franco" />, divRoot );
// ReactDOM.render( <CounterApp />, divRoot );
ReactDOM.render(
  <FirstApp />,
  divRoot )
