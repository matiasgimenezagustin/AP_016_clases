import React, { useState } from 'react'

const Product = (propiedades) => {
    const [estaComprado, setEstaComprado] = useState(false)

    
    const handleAddToCart = () =>{
        setEstaComprado(true)
    }

     /* 
     Creen un estado que se llame showBox y con un valor inicial el false
     Luego tambien creen un div que mida 200*200 y sea de color violeta
     Luego creen un button que diga mostrar

     Si showBox es verdadero el div se mostrara

     Cuando le den click al botton mostrar debera mostrarnos el div
     */

    console.log('me cargo')
    return (
        <div>
            {propiedades.favorito && <button>Quitar de favoritos</button>}
            <h2>{propiedades.nombre}</h2>
            <h3>Precio: ${propiedades.precio}</h3>
            {
                estaComprado 
                ?<button>Quitar del carro</button>
                :<button onClick={handleAddToCart}>Agregar al carro</button>
            }
            
        </div>
    )
}

export default Product
/* DOM */





/* function Product (){

} */

/* Crear el componente Item
Que reciba la sig propiedades

-nombre del archivo
-Tipo
-peso
-fecha de creacion
-estaOculto

div
    h3 nombre
    span tipo
    span peso
    span fecha
div

estaOculto vamos a usarlo como condicionar si se muestra o no el tipo peso y fecha


*/