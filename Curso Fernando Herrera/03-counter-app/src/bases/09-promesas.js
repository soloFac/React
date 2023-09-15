import { getHeroeById } from './08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         //Tarea
//         const p1 = getHeroeById(2);
//         // console.log(heroe)
//         //cuando se llama al resolve y lo que sea que se mande en los
//         //parentesis, este le va a transferir los valores al then
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' )
//     }, 2000)
// } );

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ))

export const getHeroeByIdAsync = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      // Tarea
      const pj = getHeroeById( id )
      if ( pj ) {
        resolve( pj )
      } else {
        reject( 'No se pudo encontrar el heroe' )
      }
      // console.log(heroe)
      // cuando se llama al resolve y lo que sea que se mande en los
      // parentesis, este le va a transferir los valores al then
      // resolve( pj );
      // reject( 'No se pudo encontrar el héroe' )
    }, 1500 )
  } )

  // return promesa;
}
