import React from 'react'
import { Footer, Header, Product } from './components'



const App = () => {
  const saludar = async( nombre ) => {
    alert('Hola ' + nombre)
    try{
      await navigator.clipboard.writeText('nunca des click a un boton sin saber que hace')
    }
    catch(error){
      console.error(error)
    }
  }
  const handleCopyText = (evento) => {
    evento.preventDefault()
  }

  const archivos = [
    {
      tipo: 'archivo',
      peso: '3kb',
      nombre: 'index',
      extension: 'html',
      creadoEn: '2023/08/12',
      id: 2
    },
    {
      tipo: 'carpeta',
      peso: '3mb',
      nombre: 'Components',
      extension: '',
      creadoEn: '2025/08/12',
      id: 1
    },
  ]


  const handlePickAColor = async (color) => {
    
    try{
      await navigator.clipboard.writeText(color)
    }
      catch(err){
      console.error('operacion invalida')
    }
    alert('has seleccionado el color: ' + color)
  }
  return (
    <div >
      <button onClick={saludar}>Click me</button>
      <button onClick={() => alert('hola 2')}>click me 2</button>
      <button onClick={() => saludar('pedro')}>Click me</button>
      <p onCopy={handleCopyText}>aaqaaaa</p>

      <button onClick={() => handlePickAColor("Verde")}>Verde</button>
      <button onClick={() => handlePickAColor("Rojo")}>Rojo</button>
      <button onClick={() => handlePickAColor("Azul")}>Azul</button>

      {archivos.map((archivo) => (
        <div key={archivo.id}>
          <h3>{archivo.nombre} . {archivo.extension} </h3>
          <span>{archivo.tipo}</span>
          <span>{archivo.peso}</span>
          <span>{archivo.creadoEn}</span>
          <hr/>
      </div>
      ))}
    </div>
  )
}

export default App

/* 
Crear 3 divs, uno rojo, otro amarillo y otro verde

Crear una funcion que se llame alertar que reciba un color y diga, diste click en la caja color {color}

Asignar esta funcion a los respectivos elementos para que funcione




Pensando en el evento onCopy, este evento ocurre cuando intentamos copiar algo.

Vamos a crear un parrafo que diga

<p> informacion sensible </p>

y al inttentar copiarlo debera aparecernos una alerta que diga, no pudes copiar este texto




Hacer 3 div con un color especifico

Al darle click al div debera guardar el color al cual hice el click en el clipboard

*/



/* Hace run h1 que tenga un fontweigth de 700 y un color en green */

/* Dont Repeat Yourself = No te repitas */

/* 
solicitart un nombre
solicitar una contraseña
solictar un DNI
Verificar que el DNI sea real y no este registrado
Verificar que el Contraseña sea real y no este registrado
*/


/* <Header/>
      <Product nombre='tv samsung' precio={700} estaComprado={true}/>
      <Product nombre='tv LG' precio={600} estaComprado={false} favorito={true}/>
      <div>
        <h3>Mi archivo.txt</h3>
        <hr/>
      </div>
      <div>
        <h3>Mi archivo.txt-2</h3>
        <span>Archivo</span>
        <span>37.00kb</span>
        <span>03/09/2022</span>
        <hr/>
      </div>
      <Footer/> */


      /* Crear una variable llamada lista de cosas que sea un array. Luego recorrela con un map y listalas */