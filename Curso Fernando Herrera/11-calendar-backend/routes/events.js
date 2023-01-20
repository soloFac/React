/* 
    Rutas de Usuarios
    host + /api/events
*/

const { Router } = require('express')

const { jwtValidator } = require('../middlewares/jwtValidator')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

const router = Router()

// Todas tienen que pasar por la validación del JWT
router.use( jwtValidator )
// Todas las rutas estaran protegidas por jwtValidator

// Obtener eventos
router.get('/', getEventos)

// Crear eventos
router.post('/', crearEvento)

// Actualizar eventos
router.put('/:id', actualizarEvento)

// Borrar eventos
router.delete('/:id', eliminarEvento)

module.exports = router
