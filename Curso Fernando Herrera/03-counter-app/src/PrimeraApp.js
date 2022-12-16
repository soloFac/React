// import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo = 'Soy un subtitulo'} ) => {

    return (
        <>
            <h1>{ saludo }!!!!</h1>
            {/* <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    //aqui se colocar de que tipo tiene que ser
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
