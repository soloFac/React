import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  // Funciona que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value))
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault()
    // Validar
    // Si no es un numeor tambien va a tener un error
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true)
      // Para que no siga ejecutando la funcion
      return undefined
    }

    guardarError(false)
    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    actualizarPregunta(false)
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      { error ? <Error mensaje='El presupuesto es incorrecto' /> : null}

      <form
        onSubmit={agregarPresupuesto}
      >
        {/* Lo que viene de un input normalmente es un string, aunque se le ponga el type="number" */}
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={definirPresupuesto}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir Presupuesto'
        />
      </form>
    </>
  )
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta
