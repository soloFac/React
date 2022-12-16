import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {
  const inputRef = useRef()
  // console.log(ref)

  const handleClick = () => {
    inputRef.current.select()
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        className='form-control'
        placeholder='Su nombre'
        ref={inputRef}
      ></input>

      <button
        className='btn btn-outline-primary mt-5'
        onClick={ handleClick }
      >
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
