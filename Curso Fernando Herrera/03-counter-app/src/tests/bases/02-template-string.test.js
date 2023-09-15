import '@testing-library/jest-dom'
import { getSaludo } from '../../bases/02-template-string'

describe( 'Pruebas en 02-template-string', () => {
  test( 'getSaludo debe de retornar Hola Fernando!', () => {
    const nombre = 'Fernando'

    const saludo = getSaludo( nombre )
    // console.log( saludo );

    expect( saludo ).toBe( 'Hola ' + nombre + '!' )
  } )

  test( 'getSaludo debe retornar Hola Carlos! si no hay argumento', () => {
    const saludo = getSaludo()

    expect( saludo ).toBe( 'Hola Carlos!' )
  } )
} )
