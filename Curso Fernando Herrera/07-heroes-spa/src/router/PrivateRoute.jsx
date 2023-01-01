import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

// children significa que va a ser un high order component
export const PrivateRoute = ({ children }) => {
  // Necesito saber si el usuario esta autentificado o no.
  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  const lastPath = pathname + search
  // console.log(lastPath)
  localStorage.setItem('lastPath', lastPath)
  // console.log('re-render')

  // Basado en si esta autenticado muestro las rutas o no
  return (logged)
    ? children
    : <Navigate to='/login' />
}
