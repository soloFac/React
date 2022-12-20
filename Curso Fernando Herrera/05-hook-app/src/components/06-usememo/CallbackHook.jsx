import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback(
    () => {
      setCounter(value => value + 1)
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
        increment={ increment }
      />
    </>
  )
}

export default CallbackHook
