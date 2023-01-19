// Para recuperar el intellisense
const { response } = require('express')

const crearUsuario = (req, response) => {
  response.json({
    ok: true,
    msg: 'registro'
  })
}

const loginUsuario = (req, response) => {
  response.json({
    ok: true,
    msg: 'login'
  })
}

const revalidarToken = (req, response) => {
  response.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}