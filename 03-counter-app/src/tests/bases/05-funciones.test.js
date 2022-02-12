import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }
        
        const user = getUser();
        console.log(user)

        expect( user ).toEqual( userTest )
    });
    
    test('getusuarioActivo debe de retornar un objeto', () => {
        const nombre = "Franco";
        const user = getUsuarioActivo( nombre );
        console.log( user );

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: nombre
        } )
    });
});