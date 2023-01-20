// const express = require('express')
// const router = express.Router

/* 
    Rutas de Usuarios
    host + /api/auth
*/

// Otra forma de realizar lo mismo
const { Router } = require('express')
// check se va a encargar de validar un campo en particular 
const { check } = require('express-validator')
const { fieldValidator } = require('../middlewares/fieldValidator')
const router = Router()
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { jwtValidator } = require('../middlewares/jwtValidator')

router.post(
  '/new', 
  [ // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    fieldValidator
  ], 
  crearUsuario )

router.post(
  '/',
  [ // middlewares
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    fieldValidator
  ],
  loginUsuario)

// jwtValidator middleware
router.get('/renew', jwtValidator, revalidarToken)

module.exports = router