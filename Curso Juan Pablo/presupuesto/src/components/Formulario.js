import React, { useState } from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import Error from './Error'

const Formulario = ({ agregarNuevoGasto }) => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, actualizarError] = useState(false)

  const agregarGasto = e => {
    e.preventDefault()

    // Validar
    if (nombre.trim === '' || cantidad < 1) {
      actualizarError(true)
      return null
    }

    actualizarError(false)
    // construir el gasto
    const gasto = {
      // como la clave y el valor son iguales no es necesario escribir nombre: nombre
      nombre,
      cantidad,
      id: shortid.generate()
    }

    // pasar el gasto al componente principal
    // guardarGasto(gasto)
    agregarNuevoGasto(gasto)

    // resetear el form
    guardarNombre('')
    guardarCantidad(0)
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aqui</h2>
      { error ? <Error mensaje='Ambos campos son obligatorios o Presupuesto Incorrecto' /> : null}

      <div className='campo'>
        <label>Nombre Gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />

        <label>Cantidad Gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          value={cantidad}
          onChange={e => { guardarCantidad(parseInt(e.target.value)) }}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Agregar Gasto'
        />
      </div>
    </form>
  )
}

Formulario.propTypes = {
  agregarNuevoGasto: PropTypes.func.isRequired
}

export default Formulario
