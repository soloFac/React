import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemon } from './store/slices/pokemon'

export const PokemonApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemon())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </>
  )
}
