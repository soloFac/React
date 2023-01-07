import { pokemonApi } from '../../../api/pokemonApi'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemon = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    // TODO: realizar petición http
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=10`)
    // const data = await resp.json()
    const { data } = await pokemonApi.get(`/pokemon?offset=${page * 10}&limit=10`)
    console.log(data)

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}
