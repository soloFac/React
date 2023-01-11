import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth'
import { startLoadingNotes } from '../store/journal/thunks'

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    // onAuthStateChanged() es un observable que se dispara cada vez que el estado de la autenticación cambia
    // callback es la funcion que voy a querer ejecutar cuando se reciba el siguiente valor (nextObservable)
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage: '' }))

      // Aqui teoricamente nos damos cuenta de que tenemos un usuario
      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
      dispatch(startLoadingNotes())
    })
    // Como regresa muchas emisiones podría querer limpiarla pero en este caso no la quiero limpiar porque siempre
    // quiero estar al tanto de los cambios en la autenticación.
  }, [])

  return {
    status
  }
}
