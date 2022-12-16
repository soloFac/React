import React from 'react'
import styled from '@emotion/styled'
import { capitalize } from '../helper'
import PropTypes from 'prop-types'

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos
  if (Object.keys(datos).length === 0) return null
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {capitalize(marca)}</li>
        <li>Año: {year}</li>
        <li>Marca: {capitalize(plan)}</li>
      </ul>
    </ContenedorResumen>
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  mask-type: 1rem;
`
