import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    })

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value }});

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('No debe de postear la informacion con Submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        //como no tenemos ningun valor no se deberia llamar a la funcion de setCategories
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Gente';

        // 1. simular el inputChange
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        // 3. setCateogires se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        // Espera que se llamara 2 veces
        // expect( setCategories ).toHaveBeenCalledTimes(2);
        // Espera que reciba una funcion como parametro el setCategories
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ) 

        // 4. el valor del input debe de estar ''
        expect( input.prop('value') ).toBe( '' )
        
    });
});