import React, { useState } from 'react'
import styled from '@emotion/styled'
import { getDifYear, calcularMarca, calcularPlan } from '../helper'
import PropTypes from 'prop-types'

const Formulario = ({ guardarResumen, guardarCargando }) => {
  const [datos, guardarDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, guardarError] = useState(false)

  // extraer los valores del state
  const { marca, year, plan } = datos

  // Leer los datos del formulario y coocarlos ene l state
  const obtenerInformacion = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = e => {
    e.preventDefault()

    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      guardarError(true)
      return null
    }

    guardarError(false)

    let resultado = 2000

    // obtener la diferencia de años
    const difYear = getDifYear(year)

    console.log(difYear)

    // por cad año hay que restar el 3%
    // resultado -= (resultado * (difYear * 0.03))
    resultado *= (1 - (difYear * 0.03))

    // Americano 16
    // Asiatico 5%
    // Europeo 30%
    resultado *= calcularMarca(marca)

    // Basico aumenta 20%
    // Completo 50%
    // Total
    resultado = parseFloat(resultado * calcularPlan(plan)).toFixed(2)

    guardarCargando(true)

    setTimeout(() => {
      guardarCargando(false)

      guardarResumen({
        cotizacion: Number(resultado),
        datos
      })
    }, 1500)
  }

  return (
    <form
      onSubmit={cotizarSeguro}
    >
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select
          name='marca'
          value={marca}
          onChange={obtenerInformacion}
        >
          <option value=''>-- Seleccione --</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select
          name='year'
          value={year}
          onChange={obtenerInformacion}
        >
          <option value=''>-- Seleccione --</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basico'
          checked={plan === 'basico'}
          onChange={obtenerInformacion}
        /> Basico
        <InputRadio
          type='radio'
          name='plan'
          value='completo'
          checked={plan === 'completo'}
          onChange={obtenerInformacion}
        /> Completo
      </Campo>
      <Boton type='submit'>Cotizar</Boton>
    </form>
  )
}

Formulario.propTypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired
}

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Boton = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin: 2rem 0;

  // & hace referencia al mismo elemento en Sass
  &:hover {
    background-color: #26C6DA;
    cursor: pointer;
  }
`

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

export default Formulario
