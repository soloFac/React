import CounterApp from "../CounterApp"
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
// Tarea 

// 1. Crear las siguientes purebas para el <CoutnerApp />
//     debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)
//         y sus valores por defecot

//     debe de mostrar el valor por defecot de 100
//         usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador


describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);
    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    } )

    test('debe de mostrar <CounterApp/> correctamente (hacer match con un snapshot)', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp value={ 100 } />)
        
        const counterText = wrapper.find('h2').text().trim();
        // console.log(`xxx${counterText}xxx`);
        expect( counterText ).toBe( '100' )
    });

    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    });

    test('debe de disminuir con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    });

    test('debe de colocar el valor por defecto', () => {
        const wrapper = shallow( <CounterApp value={ 105 } />)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        // console.log( counterText )

        expect( counterText ).toBe('105')
    });
});