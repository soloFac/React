import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalPage } from '../journal/pages/JournalPage'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../ui'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    // onAuthStateChanged() es un observable que se dispara cada vez que el estado de la autenticación cambia
    // callback es la funcion que voy a querer ejecutar cuando se reciba el siguiente valor (nextObservable)
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage: 'No existe ningun usuario logueado' }))
      const { uid, email, displayName, photoURL } = user

      dispatch(login({ uid, email, displayName, photoURL }))
    })
    // Como regresa muchas emisiones podría querer limpiarla pero en este caso no la quiero limpiar porque siempre
    // quiero estar al tanto de los cambios en la autenticación.
  }, [])

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        status === 'authenticated'
          ? <Route path='/*' element={ <JournalRoutes /> } />
          : <Route path='/auth/*' element={ <AuthRoutes /> } />

      }

      <Route path='/*' element={<Navigate to='/auth/login'/>} />

      {/* Login y Registro */}
      {/* <Route path='/auth/*' element={ <AuthRoutes /> } /> */}

      {/* JournalApp */}
      {/* <Route path='/*' element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}
