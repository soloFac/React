import React, { useState } from 'react'
import styled from '@emotion/styled'

// Un Hook es una funcion
const useMoneda = (label, stateInicial, opciones) => {
  // State de nuestro Custom Hook
  const [state, actualizarState] = useState(stateInicial)

  // funcion que se va a imprimir en pantalla
  const Seleccionar = () => (
    <>
      <Label>{label}</Label>
      <Select
        onChange={e => (actualizarState(e.target.value))}
        value={state}
      >
        <option value=''>-- Seleccione --</option>
        {opciones.map(opcion => (
          <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
        ))}
      </Select>
    </>
  )

  // Retornar state, interfaz y fn que modifica el state
  return [state, Seleccionar, actualizarState]
}

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

export default useMoneda
