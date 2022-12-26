import React, { useState } from 'react'
import UserContext from './UserContext'

// const user = {
//   id: 123,
//   name: 'Fernando',
//   email: 'fernando@google.com'
// }

const UserProvider = ({ children }) => {
  const [user, setUser] = useState()

  return (
    // El provider es el que provee la informacion
    // value es la informacion que se va a compartir entre componentes
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider
