// const getImagenPromesa = () => new Promise( resolve => resolve('https://asdfasdfsdf.com'))
// getImagenPromesa().then( console.log )

export const getImagen = async () => {

    try {
        const apiKey = 'PoODAuj9zcGg9lhIMpYqWKbh4IiWWWms'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        // console.error( error )
        return 'No existe';
    }
    

}

getImagen()
    .then(console.log)


// const apiKey = 'PoODAuj9zcGg9lhIMpYqWKbh4IiWWWms'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn)