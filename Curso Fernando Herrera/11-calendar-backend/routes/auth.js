// const express = require('express')
// const router = express.Router

/* 
    Rutas de Usuarios
    host + /api/auth
*/

// Otra forma de realizar lo mismo
const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {

  res.json({
    ok: true
  })
})

module.exports = router