import { getImagen } from '../../bases/11-async-await'

describe( 'Pruebas con async-await y Fetch', () => {
  test( 'el url debe ser un string', async () => {
    const url = await getImagen()

    expect( typeof url ).toBe( 'string' )
  } )

  test( 'debe de retornar el url de la imagen', async () => {
    const url = await getImagen()

    expect( url.includes( 'https://' ) ).toBe( true )
  } )
} )
