const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ p1 ] = personajes;

console.log( p1 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros )

//Tarea
// 1. el primer valor se llamara nombre
// 2. se llamara setNombre
const usState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }]
}

const [ nombre, setNombre ] = usState( 'Goku' );
console.log( nombre );
setNombre('Vegeta');