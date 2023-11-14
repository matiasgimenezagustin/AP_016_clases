import React from 'react'

const Product = (propiedades) => {
    console.log(propiedades)
    return (
        <div>
            {propiedades.favorito && <button>Quitar de favoritos</button>}
            <h2>{propiedades.nombre}</h2>
            <h3>Precio: ${propiedades.precio}</h3>
            {
                propiedades.estaComprado 
                ?<button>Quitar del carro</button>
                :<button>Agregar al carro</button>
            }
            
        </div>
    )
}

export default Product






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