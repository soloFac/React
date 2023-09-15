// Desestructuración
// Asignación Desestructurante
// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Ironman'
// };

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
}

// const { nombre, edad, clave } = persona;
const { nombre: nombre2 } = persona

// console.log( nombre )
console.log( nombre2 )
// console.log( persona.edad )
// console.log( persona.clave )

const usContext = ( { nombre, clave, edad, rango = 'Capitan' } ) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona )

console.log( nombreClave, anios )
console.log( lat, lng )
