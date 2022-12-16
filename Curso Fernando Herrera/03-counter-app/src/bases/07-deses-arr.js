const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;

// const [ p1 ] = personajes;
export const retornaArreglo = () => {
    return ['ABC', 123];
}

// const [ letras, numeros ] = retornaArreglo();

//Tarea
// 1. el primer valor se llamara nombre
// 2. se llamara setNombre
const usState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }]
}
