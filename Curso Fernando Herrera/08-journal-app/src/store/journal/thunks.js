export const startNewNote = () => {
  return async (dispatch, getState) => {
    // Para grabar en firebase vamos a utilizar el uid del usuario

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    //! dispatch ()
    // dispatch (newNote)
    // dispatch (activarNote)
  }
}
