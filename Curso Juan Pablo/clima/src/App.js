import React, { useEffect, useState } from 'react'
import Clima from './components/Clima'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Error from './components/Error'

function App () {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: 'pais 1'
  })

  const [consultar, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})
  const [error, guardarError] = useState(false)

  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const apiKey = 'a9084de57031904f13cee4043a88ca58'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        guardarResultado(resultado)
        guardarConsultar(false)
      }
    }

    if (resultado.cod === '404') {
      guardarError(true)
    } else {
      guardarError(false)
    }

    consultarAPI()
    // guardarConsultar(false)
  }, [consultar])

  let componente
  if (error) {
    componente = <Error mensaje='No hay resultados' />
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <>
      <Header
        titulo='Clima React App'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className='col m6 s12'>
              {componente}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
