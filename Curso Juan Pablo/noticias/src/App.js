import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoNoticias from './components/ListadoNoticias'

function App () {
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5411eff65e6741ff9808d1a2fc978aba`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      console.log(noticias.articles)
    }

    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header titulo='Buscador de Noticias'/>

      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  )
}

export default App
