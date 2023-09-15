import { retornaArreglo } from '../../bases/07-deses-arr'

describe( 'Pruebas en desestructuración', () => {
  test( 'debe de retornar un string y un número', () => {
    const [letras, numeros] = retornaArreglo()

    // console.log(arr)

    // expect( arr ).toEqual( ['ABC', 123] )

    console.log( typeof letras )

    expect( letras ).toBe( 'ABC' )
    expect( typeof letras ).toBe( 'string' )

    console.log( typeof numeros )

    expect( numeros ).toBe( 123 )
    expect( typeof numeros ).toBe( 'number' )
  } )

  test( 'debe coincidir con el array retornado', () => {
    const arr = retornaArreglo()
    console.log( arr )

    expect( arr ).toEqual( ['ABC', 123] )
  } )
} )
