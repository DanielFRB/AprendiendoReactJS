import React from "react";

export default function Cuadro({valor, onCuadradoClick}) {
  return (
    <button className="cuadro" onClick={onCuadradoClick}>
      {valor}
    </button>
  );
};