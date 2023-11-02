/* let nombre = 'juan'
 */

/* if(true){
    
    
    let nombre = 'maria'
    console.log(nombre)
    if(true){
        nombre = 'pepe'
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre) */


/* for(let i = 0; i < 10; i++){
    console.log(i)
    
}


for(let i = 30; i < 80; i++){
    console.log(i)
} */


/* truthy y falsy */

//NaN
/* console.log('120' / true)
console.log(typeof NaN) */
/* let condicion = false


if(condicion){
    console.log('es verdadero')
}
else{
    console.log('es falso')
} */

/* let condicion = 'pepe' */

/* operador ternario */

/* condicion ? console.log('juan') : console.log('pedro') */


/* let apelido = 'diaz'
let dinero = 300 */

/* Si se tiene el apellido diaz y mas de 200 pesos entoces decir por consola 'dejar pasar' sino decir 'no podras pasar' */

/* OPCIONAL */
/* const apellido = "Diaz"; */
/* const dinero = 250;  */
/* const mensaje = (apellido === "Diaz" && dinero > 200) ? "dejar pasar" : "no podras pasar";
console.log(mensaje); */

/* Si se tiene el apellido diaz y mas de 200 pesos entoces decir por consola 'dejar pasar' sino verificar que su dinero sea mayor a 1000, si es verdad decir ´dejar pasar´ sino decir ´no dejar pasar´ */


/* (apellido == "diaz" && dinero > 200) 
? console.log("dejar pasar") 
: (dinero > 1000) 
? console.log("dejar pasar") 
: console.log("no dejar pasar") */

const alumbrar = () =>{
    console.log('estoy encendida')
}

function multiplicar (a, b) {
    return a * b
}

const sumar = (a, b) => a + b

const restar  = (a, b) =>{
    return a - b
}

const esPar = (numero) => numero % 2 == 0

console.log('El numero 3 es ' + (esPar(3) ? 'par' : 'impar'))
console.log(sumar(4, 3))
console.log(restar(10, 5))

let luzEncendida = true

luzEncendida && alumbrar()


/* 
dada la variable booleana showModal
si showModal es verdadero debera mostrarnos en consola 'modal abierto'

dada la variable booleana isAdmin

Si la variable booleana isAdmin es false entonces debera mostrar por consola 'es usuario'
*/

/* showModal  && console.log('modal abierto')

!isAdmin && console.log('es usuario') */


/* 
Crear un array de productos donde cada producto tenga precio stock, id, nombre (almenos 5)
*/

const productos = [
    {
      id: 1,
      nombre: 's23',
      precio: 800,
      stock: 50
    },
    {
      id: 2,
      nombre: 'iphone 15',
      precio: 900,
      stock: 30
    },
    {
      id: 3,
      nombre: 'iphone 14',
      precio: 800,
      stock: 60
    },
    {
      id: 4,
      nombre: 's20',
      precio: 500,
      stock: 25
    },
    {
      id: 5,
      nombre: 'pixel 3',
      precio: 500,
      stock: 40
    }
  ];

/* MAP DEVUELVE UN ARRAY DONDE CADA ELEMENTO ES EL RESULTANTE DE LA EJECUCION DE LA CALLBACK */
  console.log(productos.map(producto => {
    producto.iva = producto.precio * 0.21
    return producto
}))



/* let productosEncontrados = productos.filter((producto) =>{ 
    return producto.stock > 45
})
 */
/* let productosEncontrados = productos.filter(function(producto) { 
    return producto.stock > 45
}) */

/* let productosEncontrados = productos.filter((producto) => producto.stock > 45) */

/* console.log(productosEncontrados) */

/* let iphone14 = productos.find(producto  => producto.nombre == 'iphone 14')

console.log(iphone14) */


/* Crear 2 funciones:

getElementById(id) recibe un id y devuelve el producto con el id recibido, en caso de no existir devuelve un 'not found'

filterByPrice(max) recibe un maximo y nos trara todos los productos que cuesten menos que este maximo
*/



  /* crear la funcion */

/* 
  const getElementById = (id) => {

    let producto = productos.find(producto => producto.id == id)

    return (producto ? producto : "Not found")
}

const filterByPrice = (precio) => {
    return productos.filter(producto => producto.precio < precio)
} */