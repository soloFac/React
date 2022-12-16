import React, { useState } from 'react'
import Carrito from './components/Carrito'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Producto } from './components/Producto'

const App = ({ linter }) => {
  // Crear listado de productos
  const [productos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ])

  const [carrito, agregarProducto] = useState([])

  // Obtener la fecha
  return (
    <div className='App'>
      <Header title='Tienda Virtual' />
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer />
    </div>
  )
}

export default App
