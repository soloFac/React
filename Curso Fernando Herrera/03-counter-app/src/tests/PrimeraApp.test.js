import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    
    //Prueba sin enzime, nos muestra poca informacion si obtenemos un error
    // test('debe de mostrar el mensaje "Hola, Soy Franco"', () => {
    //     const saludo = 'Hola, soy Franco'
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> )
    //     expect( getByText(saludo)).toBeInTheDocument();
    // });

    //ENZIME
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Franco'
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> )

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Franco'
        const subTitulo = 'Soy un subtitulo'
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subTitulo }
            /> )

            const textoParrafo = wrapper.find('p').text();

            expect( textoParrafo ).toBe( subTitulo );
    });
});