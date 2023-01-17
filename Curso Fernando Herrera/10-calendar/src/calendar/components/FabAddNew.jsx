import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { addHours } from 'date-fns'

const structureEvent = {
  title: '',
  notes: '',
  start: addHours(new Date(), 1),
  end: addHours(new Date(), 3),
  bgColor: '#e07171',
  user: {
    _id: '123',
    name: 'Franco'
  }
}

export const FabAddNew = () => {
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const handleClickNew = () => {
    setActiveEvent(structureEvent)

    openDateModal()
  }

  return (
    <button
      className='btn btn-primary fab'
      onClick={handleClickNew}
    >
      <i className='fas fa-plus'></i>
    </button>
  )
}
