import React from 'react'


const App = () => {
  let edad = 18
  let color = 'red'
  if(edad >= 18){
    color = 'blue'
  }
  const saludar = () => 'hola'
  return (
    <div 
    className='caja'
    style={
        {
   
          color: 'black'
        }
      }>
      soy el app
      {1 + 1}
      <br />
      {saludar()}
      <form>
        <label htmlFor="nombre"></label>
        <input id='nombre'/>
      </form>
    </div>
  )
}

export default App
/* Hace run h1 que tenga un fontweigth de 700 y un color en green */