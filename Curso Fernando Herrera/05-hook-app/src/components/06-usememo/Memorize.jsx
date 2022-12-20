import React, { useState } from 'react'
import Small from './Small'
import useCounter from '../../hooks/useCounter'

const Memorize = () => {
  const { counter, increment } = useCounter()
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Counter: <Small value={counter} /></h1>

      <button
        className='btn btn-primary'
        onClick={() => increment()}
      >
            +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={() => setShow(!show)}
      >
            Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default Memorize
