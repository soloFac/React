// const express = require('express')
// const router = express.Router

/* 
    Rutas de Usuarios
    host + /api/auth
*/

// Otra forma de realizar lo mismo
const { Router } = require('express')
const router = Router()

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post('/new', crearUsuario)

router.post('/', loginUsuario)

router.get('/renew', revalidarToken)

module.exports = router