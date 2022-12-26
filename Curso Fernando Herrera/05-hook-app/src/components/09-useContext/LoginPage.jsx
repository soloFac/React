import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const LoginPage = () => {
  // UserContext regresara el contexto mas cercano. En este caso es el UserContext.Provider
  const { user, setUser } = useContext(UserContext)
  // Aquí obtenemos el value del UserContext.Provider.
  console.log(user)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={ () => setUser({ id: 123, name: 'Fernando', email: 'fernando@gmail.com' })}
      >
        Set user
      </button>
    </>
  )
}

export default LoginPage
