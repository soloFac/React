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

import React, { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleINputchange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }
}

export default useForm
