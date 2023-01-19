const express = require('express')
const { dbConnection } = require('./db/config')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// Base de datos
dbConnection()

// MIDDLEWARES app.use()

// Directorio Publico
app.use( express.static('public') )

// Lectura y parseo del body
app.use( express.json() )

// Rutas
// Cualquier cosa que exporte el archivo './routes/auth' se va a habilitar en la ruta /api/auth
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos


// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})