import { addHours, differenceInSeconds } from 'date-fns/esm'
import React, { useEffect, useMemo, useState } from 'react'

import Modal from 'react-modal'
import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useUiStore } from '../../hooks/useUiStore'
import { useCalendarStore } from '../../hooks'

registerLocale('es', es)
// Esto va a ayudar a que se pueda colocar por sobre todo
Modal.setAppElement('#root')

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

export const CalendarModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore()
  const { activeEvent } = useCalendarStore()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const [formValues, setFormValues] = useState({
    title: 'Franco',
    notes: 'de la Rosa',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const titleClass = useMemo(() => {
    if (!formSubmitted) return ''

    return (formValues.title.length > 0)
      ? ''
      : 'is-invalid'
  }, [formValues.title, formSubmitted])

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({
        ...activeEvent
      })
    }
  }, [activeEvent])

  const onCloseModal = () => {
    closeDateModal()
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
    setFormSubmitted(true)

    const { start, end } = formValues

    const difference = differenceInSeconds(end, start)

    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')
      return
    }

    if (formValues.title.length <= 0) return

    console.log(formValues)

    // TODO
    // Remover errores en pantalla
    // cerrar modal
  }

  // TODO
  // Agregar validacion de que la cambiar la fecha de inicio tambien la fecha de fin cambie,
  // si la fecha de fin es menor. Aplica lo mismo para la hora, si estan en el mismo día.

  return (
    <Modal
      isOpen={isDateModalOpen}
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
            className={`form-control ${titleClass}`}
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
