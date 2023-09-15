import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const FirstApp = ( { title, subTitle, name } ) => {
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      {/* <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  name: 'Franco',
  subTitle: 'No hay subtítulo',
  title: 'No hay titulo'
}

export default FirstApp
