//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Prueba

const getUsuarioActivo =  nombre => ({
      uid: 'ABC567',
      username: nombre
    }
);

const usuarioActivo = getUsuarioActivo('Fernando')
console.log( usuarioActivo )