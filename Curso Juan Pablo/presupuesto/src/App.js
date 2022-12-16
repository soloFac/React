import React, { useState } from 'react'
import ControlPresupuesto from './components/ControlPresupuesto'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Pregunta from './components/Pregunta'

function App () {
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  // const [gasto, guardarGasto] = useState({})

  // UseEffect que actualiza el restante
  // useEffect(() => {
  //   guardarGastos([
  //     ...gastos,
  //     gasto
  //   ])
  // }, [gasto])

  // Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
    guardarRestante(restante - gasto.cantidad)
  }

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>
          { mostrarpregunta
            ? (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />)
            : (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className='one-half column'>
                  {gastos
                    ? <Listado
                      gastos={gastos}
                    />
                    : null
                  }
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>)}

        </div>
      </header>
    </div>
  )
}

export default App
