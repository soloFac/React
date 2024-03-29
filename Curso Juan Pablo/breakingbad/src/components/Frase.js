import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
  padding: 3rem;
  margin: 0 1rem;
  border-radius: .5rem;
  background-color: rgba(255, 255, 255, 100%);
  max-width: 800px;

  h1{
    font-family: Arial, Arial, Helvetica, sans-serif, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before{
      content: open-quote;
      font-size: 7rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }

  @media (min-width: 768px){
    margin-top: 10rem;
  }

  @media (max-width: 768px){
    margin-top: 7rem;
    font-size: .7rem;
    padding: 2rem;

    h1{
      padding-left: 1.5rem;
      &::before{
        font-size: 5rem;
    }
  }
  }

`

const Frase = ({ frase }) => {
  if (Object.keys(frase).length === 0) return null
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>-{frase.author}</p>
    </ContenedorFrase>
  )
}

export default Frase
