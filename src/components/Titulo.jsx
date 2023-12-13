import React from 'react'
import Boton from './Boton'

const Titulo = ({nombre="Titulo por defecto", cantidad= 0, numero}) => {


  return (
    <div>
       <p>Nombre del libro: {nombre} </p> 
       <p>Cantidad de hojas: {cantidad}</p>
        <Boton numero={numero}/>
    </div>
  )
}

export default Titulo