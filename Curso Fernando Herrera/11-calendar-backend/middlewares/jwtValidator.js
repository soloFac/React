const { response } = require('express')
const jwt = require('jsonwebtoken')

// Puedo modificar la req y la req va a ser pasada a cualquier función que siga después llamada con este next
const jwtValidator = ( req, res = response, next ) => {
  // x-token headers
  const token = req.header('x-token')
  if ( !token ) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la peticion'
    })
  }

  try {
    const { uid, name } = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    )

    // Estos son campos que se pueden agregar a la req, luego voy a poder extraerlos cuando realice la petición
    req.uid = uid
    req.name = name
    // req.prueba = 'Esto es una prueba'

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    })
  }
  // para que continue con el siguiente middleware
  next()
}

module.exports = {
  jwtValidator
}