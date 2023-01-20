const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./db/config')

// Crear el servidor de express
const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

// MIDDLEWARES app.use()

// Directorio Publico
app.use( express.static('public') )

// Lectura y parseo del body
app.use( express.json() )

// Rutas
// Cualquier cosa que exporte el archivo './routes/auth' se va a habilitar en la ruta /api/auth
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))


// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})