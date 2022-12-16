import React, { useState } from 'react'

import './effects.css'

export const FormCustomHook = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  const handleINputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>FormCustomHook</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={ handleINputChange }
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={ email }
          onChange={ handleINputChange }
        />
      </div>
    </>
  )
}
