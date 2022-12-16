import React from 'react'
import Noticia from './Noticia'

const ListadoNoticias = ({ noticias }) => {
  return (
    <div className='row'>
      {noticias.map(noticia => (
        <Noticia key={noticia.url}/>
      ))}
    </div>
  )
}

export default ListadoNoticias
