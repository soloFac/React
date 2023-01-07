import React from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './store/slices/counter'

function App () {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <p>counter is: { counter }</p>
      <button type='button' onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type='button' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type='button' onClick={() => dispatch(incrementByValue(2))}>
        Increment by 2
      </button>
    </>
  )
}

export default App
