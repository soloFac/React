import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Frase from './components/Frase'

function App () {
  const [frase, guardarFrase] = useState({})

  const consultarAPI = async () => {
    // const resultado = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    // const frase = resultado.then(respuesta => respuesta.json())
    // frase.then(resultado => console.log(resultado))
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    guardarFrase(frase[0])
  }

  useEffect(() => {
    consultarAPI()
  }, [])

  return (
    <Contenedor>
      {(Object.keys(frase).length === 0)
        ? <Espacio/>
        : <Frase
          frase={frase}
        />}
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  )
}

export default App

const Espacio = styled.div`
  margin-top: 15rem;
`

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15rem;
  flex-direction: column;
  height: min-content;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  color: #fff;
  margin: 4rem 0;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 400px;
  }

`
