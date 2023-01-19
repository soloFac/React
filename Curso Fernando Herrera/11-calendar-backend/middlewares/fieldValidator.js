const { response } = require('express')
const { validationResult } = require('express-validator')

// next hace que se ejecute el siguiente middleware
const fieldValidator = (req, res = response, next) => {
  // Manejo de errores
  const errors = validationResult( req )
  
  if( !errors.isEmpty() ){
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  next()
}

module.exports = {
  fieldValidator
}