import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback(
    (value) => {
      setCounter(c => c + value)
    },
    []
  )

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>CallbackHook Hook: { counter }</h1>
      <hr />

      <ShowIncrement
        increment={ incrementFather }
      />
    </>
  )
}

export default CallbackHook
