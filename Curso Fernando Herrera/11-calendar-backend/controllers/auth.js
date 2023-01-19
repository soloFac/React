// Para recuperar el intellisense
const { response } = require('express')

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body

  if( name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: 'El nombre debe ser de 5 letras'
    })
  }

  res.json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password
  })
}

const loginUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login'
  })
}

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}