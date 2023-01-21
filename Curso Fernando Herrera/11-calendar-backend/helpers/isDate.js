const moment = require('moment')

// Ante cualquier duda revisar la documentacion
const isDate = ( value, rest ) => {
  console.log('---------------------------------------------isDate---------------------------------------------');
  
  if ( !value ){
    return false
  }

  const fecha = moment(value)
  if( !fecha.isValid() ) {
    return false
  }

  return true
}


module.exports = { isDate }