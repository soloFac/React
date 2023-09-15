import { getHeroeById } from '../../bases/08-imp-exp'
import heroes from '../data/heroes'

describe( 'Pruebas en funciones de Héroes', () => {
  test( 'debe de retornar un heroe por id', () => {
    const id = 2
    const heroe = getHeroeById( id )

    console.log( heroe )

    const heroeData = heroes.find( h => h.id === id )

    expect( heroe ).toEqual( heroeData )
  } )

  test( 'deberia retornar undefined si el ID no existe', () => {
    // id de un heroe que no existe
    const id = 10
    const heroe = getHeroeById( id )
    console.log( heroe )

    // como el undefined es un primitivo podemos colocarle
    // toBe( )
    expect( heroe ).toBe( undefined )
  } )

  // debe de retornar un arreglo con los héroes de DC
  // owner
  // toEqual al arreglo filtrado
  test( 'debe de retornar un arreglo con los héroes de DC', () => {

  } )

  // debe de retornar un arreglo con los héroes de Marvel
  // length = 2
} )
