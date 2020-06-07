import React from "react";

const Producto = ({ producto, carrito, agregaProducto, productos }) => {
  const { id, nombre, precio } = producto;

  // Agregar un producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregaProducto([...carrito, producto]);
  };

  // Eliminar un producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter((producto) => producto.id != id);
    // Colocar los productos en el state
    agregaProducto(productos);
  };

  return (
    <div>
      <h3>{nombre}</h3>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          <h3>Comprar ➕</h3>
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          <h3>Eliminar ❌</h3>
        </button>
      )}
    </div>
  );
};

export default Producto;
