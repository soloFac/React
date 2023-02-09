const { response } = require('express')
const Evento = require('../models/Evento')

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find()
                              .populate('user', 'name')
                              // .populate('user', 'name password')
  res.json({
    ok: true,
    eventos
  })
}

const crearEvento = async (req, res = response) => {
  // Verificar que tenga el evento
  const evento = new Evento( req.body )

  try {
    evento.user = req.uid

    const eventoGuardado = await evento.save()

    res.json({
      ok: true,
      evento: eventoGuardado
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador...'
    })
    
  }
}

const actualizarEvento = async (req, res = response) => {
  const eventoId = req.params.id
  const uid = req.uid
  console.log(req)

  try {
    const evento = await Evento.findById( eventoId )
    if ( !evento ) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id'
      })
    }
    
    if ( evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      })
    }

    const nuevoEvento = {
      ...req.body,
      user: uid
    }

    // Por defecto regresa el ultimo documento pero con -- new: true -- me retorna el evento actualizado
    const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } )

    res.json({
      ok: true,
      evento: eventoActualizado
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador...'
    })
  }

  res.json({
    ok: true,
    eventoId
  })
}

const eliminarEvento = async (req, res = response) => {
  const eventoId = req.params.id
  const uid = req.uid

  console.log('eventoId: ', eventoId)
  console.log('uid: ', uid)

  try {
    const evento = await Evento.findById( eventoId )
    
    if ( !evento ) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id'
      })
    }
    
    if ( evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de eliminar este evento'
      })
    }
    
    await Evento.findOneAndDelete( eventoId )

    return res.json({
      ok: true,
      msg: 'Evento eliminado'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador...'
    })
  }

  res.json({
    ok: true,
    msg: 'eliminarEvento'
  })
}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
}


