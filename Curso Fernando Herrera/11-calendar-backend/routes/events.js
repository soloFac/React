const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')

// Todas tienen que pasar por la validación del JWT
// Obtener eventos
router.get('/', getEventos)

// Crear eventos
router.post('/', crearEvento)

// Actualizar eventos
router.put('/:id', actualizarEvento)

// Borrar eventos
router.delete('/:id',eliminarrEvento)

module.exports = {
  router
}