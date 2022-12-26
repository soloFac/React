import { createContext } from 'react'

// UserContext es un high order component
// Para que creamos un high order component? Para poder compartir informacion entre componentes. Para saber como luce la informacion.
// UserContext es un objeto que tiene un provider y un consumer
// El provider es el que provee la informacion
// El consumer es el que consume la informacion
const UserContext = createContext()

export default UserContext
