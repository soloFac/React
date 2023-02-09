/* 
    Rutas de Usuarios
    host + /api/events
*/

const { Router } = require('express')
const { check } = require('express-validator')

const { jwtValidator } = require('../middlewares/jwtValidator')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { isDate } = require('../helpers/isDate')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

const router = Router()

// Todas tienen que pasar por la validación del JWT
router.use( jwtValidator )
// Todas las rutas estaran protegidas por jwtValidator

// Obtener eventos
router.get(
    '/', 
    getEventos
)

// Crear eventos
router.post(
    '/', 
    [
        check('title', 'El titlo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalización es obligatoria').custom( isDate ),
        fieldValidator
    ],
    crearEvento
)

// Actualizar eventos
router.put(
    '/:id',
    [
        check('title', 'El titlo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalización es obligatoria').custom( isDate ),
        fieldValidator
    ],
    actualizarEvento
)

// Borrar eventos
router.delete(
    '/:id',
    [
        check('title', 'El titlo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalización es obligatoria').custom( isDate ),
        fieldValidator
    ],
    eliminarEvento
)

module.exports = router
