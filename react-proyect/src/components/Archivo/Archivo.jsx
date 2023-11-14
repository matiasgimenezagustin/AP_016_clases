import React from 'react'

const Archivo = ({archivo}) => {
  return (
    <div >
          <h3>{archivo.nombre} . {archivo.extension} </h3>
          <span>{archivo.tipo}</span>
          <span>{archivo.peso}</span>
          <span>{archivo.creadoEn}</span>
          <hr/>
      </div>
  )
}

export default Archivo