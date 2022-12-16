import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', async() => {
        //renderHook() renderiza o crea un componente virtual y allí va a colocar nuestro customHook, vamos a ocupar llamar una funcion anonima y adentro de esa función si ejecutar el hook que nosotros esperamos 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
});