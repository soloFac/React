import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon, pokemonSlice } from './store/slices/pokemon'

export const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  // console.log(isLoading)
  // console.log(pokemons)

  useEffect(() => {
    dispatch(getPokemon())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <span>Loading: { isLoading ? 'True' : 'False'} </span>

      <ul>
        {pokemons.map(({ name }) => (
          <a key={name}><li>{name}</li></a>
        ))}

      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemon(page))}
      >
        Next
      </button>
    </>
  )
}
