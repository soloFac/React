// import { useState } from 'react'

// export const useForm = ( initialState = {} ) => {

//     const [values, setValues] = useState(initialState)

//     const handleInputChange = ({ target }) => {
//         setValues({
//             ...values,
//             [ target.name ]: target.value
//         })
//     }

//     return [ values, handleInputChange ];
// }

// import React, { useState } from 'react'

// const useForm = (initialState = {}) => {
//   const [values, setValues] = useState(initialState)

//   const handleInputchange = ({ target }) => {
//     setValues({
//       ...values,
//       [target.name]: target.value
//     })
//   }
// }

// export default useForm

import React, { useState } from 'react'

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return (
    {
      ...formState,
      formState,
      onInputChange,
      onResetForm
    }
  )
}

export default useForm
