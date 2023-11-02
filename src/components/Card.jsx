import React from 'react'

function Card({nombre,edad}) {
  return (
    <div>
        <h2>Nuevo Alumno:</h2>
        <h3>Nombre: {nombre}</h3>
        <h3>Edad: {edad}</h3>
    </div>
  )
}

export default Card