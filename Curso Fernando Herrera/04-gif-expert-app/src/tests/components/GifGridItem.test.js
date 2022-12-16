import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en <GifGridItem/>', () => {
    // const url = await getGifs('prueba');
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrar el componente correctamente', async() => {
        expect ( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.props().src ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Debe de tener animate__jackInTheBox', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')
        expect( className.includes('animate__jackInTheBox') ).toBe( true )
    });
});