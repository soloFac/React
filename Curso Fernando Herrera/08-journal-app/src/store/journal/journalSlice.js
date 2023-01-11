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
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote
} = journalSlice.actions
