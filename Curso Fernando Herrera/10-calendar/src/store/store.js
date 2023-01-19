import { configureStore } from '@reduxjs/toolkit'
import { calendarSlice, uiSlice } from './'

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // Para que no revise si a esas fechas la puede serializar
    serializableCheck: false
  })
})
