// Por cada serivicio se crea un archivo .js
import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
  baseURL: VITE_API_URL
})

// Todo: configurar interceptores
// Los interceptores es algo genial que tiene axios que nos va a permitir
// interceptar las peticiones (antes o despues) y (añadir o modificar) las respuestas
// y/o añadir o modificar la peticion

export default calendarApi
