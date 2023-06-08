import React from "react";

export default function FilaProducto({ producto }) {
  const name = producto.almacenado ? producto.nombre :
    <span style={{color: 'red'}}>
      {producto.nombre}
    </span>;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{producto.precio}</td>
    </tr>
  );
};