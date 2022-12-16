import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial)

  console.log(opciones)

  const SelectNoticias = () => (
    <select
      className='browser-default'
      value={state}
      onChange={e => actualizarState(e.target.value)}
    >
      {opciones.map(opcion => (
        <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
      ))}
    </select>
  )

  return [state, SelectNoticias]
}

export default useSelect
