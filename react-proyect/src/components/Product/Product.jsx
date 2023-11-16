import React, { useState } from 'react'

const Product = (propiedades) => {
    const [estaComprado, setEstaComprado] = useState(false)
    const [counter, setCounter] = useState(0)
    const [showBox, setShowBox] = useState(false)
    const handleAddToCart = () => {
        setEstaComprado(true)
    }

    const handleChangeVisibility = () => {
        setShowBox(!showBox)
    }

    const [counterVisibility, setCounterVisibility] = useState(false)
    /* 
    Creen un estado que se llame showBox y con un valor inicial el false
    Luego tambien creen un div que mida 200*200 y sea de color violeta
    Luego creen un button que diga mostrar

    Si showBox es verdadero el div se mostrara

    Cuando le den click al botton mostrar debera mostrarnos el div
    */
    const addToCart = () =>{
        setCounterVisibility(true)
        setCounter(1)
    }
    const cancelCart = () => {
        setCounterVisibility(false)
        setCounter(0)
    }

    const handleIncrementCart = () =>{
        setCounter(counter + 1)
    }   
    const handleDecrementCart = () =>{
        if(counter !== 1){
            setCounter(counter - 1)
        }
        else{
            cancelCart()
        }
    }

    const handleConfirm = () =>{
        propiedades.addProductToCart({nombre: propiedades.nombre, precio: propiedades.precio, id: propiedades.id}, counter)
        cancelCart()
    }
    
    return (
        <div>
            {propiedades.favorito && <button>Quitar de favoritos</button>}
            <h2>{propiedades.nombre}</h2>
            <h3>Precio: ${propiedades.precio}</h3>

            {
                counterVisibility 
                ? (
                    <div>
                    <button onClick={handleDecrementCart}>-</button>
                    <span>{counter}</span>
                    <button onClick={handleIncrementCart}>+</button>
                    <button onClick={cancelCart}>Cancelar</button>
                    <button onClick={handleConfirm}>Confirmar</button>
                </div>
                )
                :<button onClick={addToCart}>Agregar al carrito</button>
            }
            
            
            <button onClick={handleChangeVisibility}>{showBox ? 'Ocultar' : 'Mostrar'}</button>
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


/* 
Vamos a crear un boton en Product que diga

agregar al carrito

Y un contador que tenga la sig estructura

<div>
    <button>-</button>
    <span>1</span>
    <button>+</button>
    <button>Cancelar</button>
    <button>Confirmar</button>
</div>

Crear el estado llamado counterVisibility
Si counterVisibility es true debera mostrarse el contador
Sino debera mostrarse el button para agregar al carrito


Al darle click al boton agregar al carrito counterVisibility sera verdadero



Crear un estado llamado counter que empieze en 0, 
si le doy click al button de + debera incrementar en 1 el contador
si le doy click al button de - debera decrementar en 1 el contador

NO PUEDE SER MENOS QUE 1 el contador

Si le doy click al button de cancelar debera hacer que el contador valga 0 y se oculte otra vez el contador


Al darle click a agregar al carrito el counter sera 1 tambien
*/