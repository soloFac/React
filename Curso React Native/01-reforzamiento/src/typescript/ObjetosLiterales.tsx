
import React from 'react'

// El objetivo de una interfaz es definir la estructura de un objeto
// Una interfaz vacia en teoria no marca una regla de validación
// Una interfaz es un contrato que debe cumplir un objeto

interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion
}

interface Direccion {
  pais: string,
  casaNro: number
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Fernando',
    edad: 35,
    direccion: {
      pais: 'Canada',
      casaNro: 255
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  )
}
