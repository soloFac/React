import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNotes, deleteNoteById } from './journalSlice'
import { fileUpload, loadNotes } from '../../helpers'

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
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    // newDoc es el que genera el id en notes
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    // // Nunca deberiamos ver ese error porque
    if (!uid) throw new Error('El UID del usuario no existe')

    const notes = await loadNotes(uid)

    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())

    const { uid } = getState().auth
    const { active: note } = getState().journal

    // Como yo no quiero que en firebase me cree el id de la nota, lo voy a remover, porque si lo envio lo va a crear
    const noteToFireStore = { ...note }
    delete noteToFireStore.id

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc(docRef, noteToFireStore, { merge: true })
    // merge: si hay campos en mi noteToFireStore que no estoy enviando y estan en la BD, los de la BD se mantienen
    dispatch(updateNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    // await fileUpload(files[0])
    const fileUploadPromises = []
    for (const file of files) {
      // Aqui en este punto todavia no las estoy disparando
      fileUploadPromises.push(fileUpload(file))
    }
    // Ahora para dispararlas Promise.all -> el cual me devuelve un arreglo con cada una de las
    // resoluciones de las promesas en ese mismo orden
    const photosUrls = await Promise.all(fileUploadPromises)

    dispatch(setPhotosToActiveNotes(photosUrls))
    console.log(photosUrls)
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef)

    // Todo: delete images from cloudinary.

    dispatch(deleteNoteById(note.id))
  }
}
