import React, { memo } from 'react'

const ShowIncrement = ({ increment }) => {
  console.log('Me volví a generar :(')

  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment()
      }}
    >
      Incrementar
    </button>
  )
}

export default memo(ShowIncrement)
