import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemon = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    // TODO: realizar petición http

    // dispatch(setPokemons())
  }
}
