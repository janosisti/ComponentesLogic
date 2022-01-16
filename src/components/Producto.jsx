import React from "react";


export const Producto = ({producto, productos, carrito, setCarrito}) => {

    const {nombre, precio, id} = producto

    // agregar producto al carrito
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto=> producto.id ===id)[0];
        setCarrito([...carrito, producto]);
    }

    // eliminar producto del carrito
    const eliminarProducto = (id)=>{
        const productos = carrito.filter(producto=> producto.id !== id);
        setCarrito(productos);  

    }



    return (
        <div>   
            <h2>{nombre}</h2>
            <p>$ {precio}</p>
            {productos 
             ?
             (<button 
                type="button"
                onClick={()=>seleccionarProducto(id)}
                >Comprar</button>)

             :
             (<button 
                type="button"
                onClick={()=>eliminarProducto(id)}
                >Eliminar</button>)
            
            }
            
        </div>
    )
}
