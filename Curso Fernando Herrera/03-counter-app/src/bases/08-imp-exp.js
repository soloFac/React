import heroes, { owners } from '../data/heroes';

// console.log(owners)

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

// console.table( getHeroeById(2) );

//En este caso el find no nos sirve porque solo regresa 1
//Se debe utilizar filter
export const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner ) 

// console.table( getHeroesByOwner('DC') )