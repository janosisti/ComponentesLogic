import React from 'react';
import './carrito.css';
import { Producto } from './Producto';
export const Carrito = ({carrito, setCarrito}) => {
    return (
        <div className='carrito'>
            <h2>Carrito de compras</h2>
            {carrito.length === 0

            ?
                <p>No Hay Productos en el carrito</p>
            : carrito.map(producto=>(
                <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                setCarrito={setCarrito}
                />
                ))
            }
            
        </div>
    )
}
