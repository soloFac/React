import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const [error, actualizarError] = useState(false)

  // Cada vez que el usuario cambia el input
  const handleChange = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  // Como aquí tenemos asignadas estas variables, cuando reiniciemos el form, estas se reinician
  // Luego estas mismas variables son utilizadas en el value.
  const { mascota, propietario, fecha, hora, sintomas } = cita

  const submitCita = e => {
    e.preventDefault()

    // Validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
      hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true)
      return undefined
    }
    // eliminar el mensaje previo
    actualizarError(false)
    // Asignar un ID
    cita.id = uuid()
    // Crear la cita
    crearCita(cita)
    // Reinicar el form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      { error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button
          type='submit'
          className='u-full-width button-primary'
        >Agregar Cita</button>
      </form>
    </Fragment>
  )
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario
