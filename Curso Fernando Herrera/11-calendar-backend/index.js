const express = require('express')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// Directorio Publico
app.use(express.static('public'))

// Rutas
// TODO: auth // crear, login, renew
// Cualquier cosa que exporte el archivo './routes/auth' se va a habilitar en la ruta /api/auth
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos


// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})