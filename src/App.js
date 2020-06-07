import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  // Crear Listado en Hooks state
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
  ]);

  // Agregar carrito
  const [carrito, agregaProducto] = useState([]);

  // Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h1>Lista de Productos</h1>

      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} productos={productos} carrito={carrito} agregaProducto={agregaProducto} />
      ))}

      <Carrito carrito={carrito} agregaProducto={agregaProducto}/>

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
