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

    req.uid = uid
    req.name = name

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    })
  }
  
  // console.log(token);

  next()
}

module.exports = {
  jwtValidator
}