import React from "react";

export default function FilaCategoriaProducto({ categoria }) {
  return (
    <tr>
      <th colSpan="2">
        {categoria}
      </th>
    </tr>
  );
};