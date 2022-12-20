import React, { memo } from 'react'

const Small = ({ value }) => {
  console.log('Me volví a dibujar!')

  return (
    <small>{ value }</small>
  )
}

export default memo(Small)
