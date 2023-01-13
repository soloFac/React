import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    // Voy a ocupar una bandera booleana para saber si estoy guardando la nota o no
    // Para evitar dobles posteos y otras cosas
    // Cuando se dispare la acción de guardar la nota, voy a poner esta bandera en true
    isSaving: false,
    // Voy a ocupar un mensaje para mostrar al usuario
    messageSaved: '',
    // Voy a ocupar un arreglo para guardar las notas
    notes: [],
    active: null
    // active: {
    //   id: 'ABC123', // este id nos lo va a pasar firebase
    //   title: '',
    //   body: '',
    //   date: 1234567,
    //   imageUrls: [] // https://foto1.jpg, https://foto2.jpg
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      // Va a ser la nota que quiero establecer en pantalla
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
      // TODO: mensaje de error...
    },
    updateNote: (state, action) => { // payload: note
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      state.messageSaved = `${action.payload.title}, actualizada correctamente`
    },
    deleteNoteById: (state, action) => {

    },
    setPhotosToActiveNotes: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
      state.isSaving = false
    },
    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.active = null
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNotes,
  setSaving,
  updateNote
} = journalSlice.actions
