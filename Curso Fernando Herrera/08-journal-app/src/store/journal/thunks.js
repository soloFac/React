import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { savingNewNote, addNewEmptyNote, setActiveNote } from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // Para grabar en firebase vamos a utilizar el uid del usuario
    const { uid } = getState().auth

    dispatch(savingNewNote())

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    // Aqui ya tiene la configuración de la variable de entornos, ya sabe a que base de datos estoy apuntando
    const newDoc = doc(collection(FirebaseDB, `id-user-${uid}/journal/notes`))
    // newDoc es el que genera el id en notes
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    //! dispatch ()
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}
