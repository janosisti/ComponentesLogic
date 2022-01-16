import React, {useState} from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Producto } from "./components/Producto";
import { Carrito } from "./components/Carrito";

function App() {

  //listado de productos
  const [productos, setProductos]= useState([
    { id:1, nombre: 'Camisa A', precio: 50},
    { id:2, nombre: 'Camisa B', precio: 40},
    { id:3, nombre: 'Camisa C', precio: 10},
    { id:4, nombre: 'Camisa D', precio: 80},
  ]);

  //state carrito de compras
  const [carrito, setCarrito]= useState([]);




  //obetener fecha
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header titulo="Tienda virtual" />
      <h1>Listado de Prductos</h1>
      {productos.map(producto => (
        <Producto
        key= {producto.id}
        producto= {producto}
        carrito= {carrito}
        setCarrito= {setCarrito}
        productos={productos}
        />
      ))}
      <Carrito
      carrito= {carrito}
      setCarrito={setCarrito}
      />
      <Footer 
      fecha = {fecha}/>
    </>
  );
}

export default App;
