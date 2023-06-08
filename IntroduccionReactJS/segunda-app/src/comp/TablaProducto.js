import React from "react";
import FilaCategoriaProducto from "./FilaCategoriaProducto";
import FilaProducto from "./FilaProducto";

export default function TablaProducto({ productos, filterText, inStockOnly }) {
  const rows = [];
  let lastCategoria = null;

  productos.forEach((producto) => {
    if (producto.nombre.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !producto.almacenado) {
      return;
    }
    if (producto.categoria !== lastCategoria) {
      rows.push(
        <FilaCategoriaProducto 
          categoria={producto.categoria} 
          key={producto.categoria} />
      );
    }
    rows.push(
      <FilaProducto 
        producto={producto} 
        key={producto.nombre} />
    );
    lastCategoria = producto.categoria;
  });
  console.log(rows)

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}