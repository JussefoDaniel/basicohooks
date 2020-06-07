import React from "react";
import Producto from "./Producto";
import "./carrito.css";

const Carrito = ({ carrito, agregaProducto }) => (
  <div className="carrito">
    <h2>Tu Carrito de compras</h2>
    {carrito.length === 0 
    ? <p>No hay productos</p>
    : carrito.map(producto => (
      <Producto key={producto.id} producto={producto} carrito={carrito} agregaProducto={agregaProducto} />
    ))}
  </div>
);

export default Carrito;
