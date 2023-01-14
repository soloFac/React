import { addHours, differenceInSeconds } from 'date-fns/esm'
import React, { useState } from 'react'

import Modal from 'react-modal'
import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('es', es)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
// Esto va a ayudar a que se pueda colocar por sobre todo
Modal.setAppElement('#root')

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const [formValues, setFormValues] = useState({
    title: 'Franco',
    notes: 'de la Rosa',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const onCloseModal = () => {
    console.log('cerrando modal')
    setIsOpen(false)
  }

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  // event traeria la fecha y changing los valores ['start' o 'end']
  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { start, end } = formValues

    const difference = differenceInSeconds(end, start)

    if (isNaN(difference) || difference <= 0) {
      console.log('Error en fechas')
      return
    }

    if (formValues.title.length <= 0) return

    console.log(formValues)

    // TODO
    // Remover errores en pantalla
    // cerrar modal
  }

  // Todo: Agregar validacion de que la cambiar la fecha de inicio tambien la fecha de fin cambie,
  // Todo: si la fecha de fin es menor. Aplica lo mismo para la hora, si estan en el mismo día.

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form onSubmit={onSubmit} className='container'>

        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>
          <DatePicker
            className='form-control'
            selected={formValues.start}
            onChange={event => onDateChange(event, 'start')}
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DatePicker
            className='form-control'
            minDate={formValues.start}
            selected={formValues.end}
            onChange={event => onDateChange(event, 'end')}
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className='form-control'
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id='emailHelp' className='form-text text-muted'>Una descripción corta</small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>Información adicional</small>
        </div>

        <button
          type='submit'
          className='btn btn-outline-primary btn-block'
        >
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>

      </form>
    </Modal>
  )
}
