const jwt = require('jsonwebtoken')

// Si el token es manipulado ya no es valido, cualquier letra que sea modificada del token lo invalida y no se lo aceptará
const generarJWT = ( uid, name ) => {
  return new Promise( (resolve, reject) => {
    const payload = { uid, name }
    
    const callback = (err, token) => {
      if ( err ) {
        console.log(err)
        reject('No se pudo generar el token')
      }
      resolve( token )
    }

    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '2h'
    }, callback)
  })
}

module.exports = {
  generarJWT
}