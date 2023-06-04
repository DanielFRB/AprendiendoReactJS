import React from "react";
import Cuadro from "./cuadro";
import CalculaGanador from "./calcularGanador";

export default function Tablero({xEsSiguiente, cuadros, onJugada}) {
  function handleCuadradoClick(i) {
    if (CalculaGanador(cuadros) || cuadros[i]) {
      return;
    };
    const nextCuadros = cuadros.slice();
    if (xEsSiguiente) {
      nextCuadros[i] = "X";
    } else {
      nextCuadros[i] = "O";
    };
    onJugada(nextCuadros);
  };

  const ganador = CalculaGanador(cuadros);
  let estado;
  if (ganador) {
    estado = "Ganador: " + ganador;
  } else {
    estado = "Siguiente jugador: " + (xEsSiguiente ? "X" : "O");
  };

  return (
    <div>
      <div className="status">{estado}</div>
      <div className="tablero-row">
        <Cuadro valor={cuadros[0]} onCuadradoClick={() => handleCuadradoClick(0)} />
        <Cuadro valor={cuadros[1]} onCuadradoClick={() => handleCuadradoClick(1)} />
        <Cuadro valor={cuadros[2]} onCuadradoClick={() => handleCuadradoClick(2)} />
      </div>
      <div className="tablero-row">
        <Cuadro valor={cuadros[3]} onCuadradoClick={() => handleCuadradoClick(3)} />
        <Cuadro valor={cuadros[4]} onCuadradoClick={() => handleCuadradoClick(4)} />
        <Cuadro valor={cuadros[5]} onCuadradoClick={() => handleCuadradoClick(5)} />
      </div>
      <div className="tablero-row">
        <Cuadro valor={cuadros[6]} onCuadradoClick={() => handleCuadradoClick(6)} />
        <Cuadro valor={cuadros[7]} onCuadradoClick={() => handleCuadradoClick(7)} />
        <Cuadro valor={cuadros[8]} onCuadradoClick={() => handleCuadradoClick(8)} />
      </div>
    </div>
  );
};