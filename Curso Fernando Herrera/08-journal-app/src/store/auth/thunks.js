import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle()

    const { errorMessage } = result
    if (!result.ok) return dispatch(logout({ errorMessage }))

    // delete result.ok
    dispatch(login(result))

    console.log({ result })
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    // console.log(email, password)
    dispatch(checkingCredentials())

    const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

    console.log('paso por withEP')
    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, displayName, email, photoURL }))
  }
}
