import React, { useState, useEffect } from 'react'
import Cita from './components/Cita'
import Formulario from './components/Formulario'

function App () {
  // Citas en el Local Storage
  // localStorage solo almacena strings y JSON.parse lo convertir aa string
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = []
  }

  const [citas, guardarCitas] = useState(citasIniciales)
  // Funcion que tome las citas actuales y agregue las nuevas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }
  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    const citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
    console.log('se ejecuto useEffect')
  }, [citas])

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <>
      <h1>Administracion de Pacientes</h1>

      {/* Skeleton es bastante similar a Boostratp */}
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
