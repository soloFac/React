const { Schema, model } = require('mongoose')

const EventoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    // De esta forma en type le especificamos la referencia a la coleccion de usuarios
    //ObjectId es el tipo de dato que se guarda en la base de datos
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
})

EventoSchema.method('toJSON', function() {
  // voy a tener la referencia a todo el objeto
  const { __v, _id, ...object } = this.toObject()

  object.id = _id
  return object
})

module.exports = model('Evento', EventoSchema)