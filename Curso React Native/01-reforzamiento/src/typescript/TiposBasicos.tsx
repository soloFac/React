import React from 'react'

export const TiposBasicos = () => {
  const nombre: string = 'Fernando'
  const edad: number = 24
  const estaActivo: boolean = true

  const poderes: string[] = []

  return (
    <>
      <h3>Tipos básicos</h3>
      { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'Inactivo' }
      <br />
      { poderes.join(', ') }
    </>
  )
}
