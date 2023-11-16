import React, { useState } from 'react'
import { Archivo, Footer, Header, Product } from './components'



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

  const productos = [
    {
      nombre: 'pc gamer 500gb',
      precio: 400,
      id: 0
    },
    {
      nombre: 'tv samsung 80"',
      precio: 800,
      id: 1
    },
    {
      nombre: 'Velador de cars',
      precio: 9000,
      id: 2
    }
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
  const [cart, setCart] = useState([])

  const addProductToCart = (producto, quantity) =>{
    if(cart.some(productfromCart => productfromCart.id === producto.id)){
      setCart(cart.map((productFromCart) =>{
        if(productFromCart.id === producto.id){
          productFromCart.quantity += quantity
        }
        return productFromCart
      }))
    }
    else{
      setCart([...cart, {...producto, quantity }])
    }

  }

  const getTotalCart = () =>{
    let total = 0
    cart.forEach(producto =>{
      total += producto.precio * producto.quantity
    })
    return total
  }

  console.log(cart)
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
        <Archivo archivo={archivo} key={archivo.id}/>
      ))}
      {
        productos.map(producto => (
          <Product  nombre={producto.nombre} precio={producto.precio} favorito={false} id={producto.id} addProductToCart={addProductToCart}/>
        ))
      }


      <h1>Carrito</h1>
      <div>

        {
          cart.length == 0 
          ? <h2>Aun no has comprado productos</h2>
          : 
          <>
            {
              cart.map(producto =>(
                <div>
                  <h3>{producto.nombre}</h3>
                  <span>Precio: ${producto.precio}</span>
                  <h4>Cantidad comprada: {producto.quantity}</h4>
                  <hr/>
                </div>
              ))
            }
            <h3>Total: ${getTotalCart()}</h3>
          </>
        }
      </div>
      
    </div>
  )
}

export default App

/* Una vez mapeada la lista de cosas vamos a crear un Componente para representar el item que mapeamos
Por ejemplo:

array.map((element) =>(
  <Element title={} price={} key={}/>
))
*/

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