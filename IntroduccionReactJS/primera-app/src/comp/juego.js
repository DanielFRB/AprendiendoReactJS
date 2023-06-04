import React, { useState } from "react";
import Tablero from "./tablero.js";

export default function Juego() {
  const [historial, setHistorial] = useState([Array(9).fill(null)]);
  const [movimientoActual, setMovimientoActual] = useState(0);
  const xEsSiguiente = movimientoActual % 2 === 0;
  const cuadrosActual = historial[movimientoActual];

  function handleJugada(nextCuadros) {
    const siguienteHistorial = [...historial.slice(0, movimientoActual + 1), nextCuadros];
    setHistorial(siguienteHistorial);
    setMovimientoActual(siguienteHistorial.length - 1);
  };

  function saltarHasta(siguienteMovimiento) {
    setMovimientoActual(siguienteMovimiento);
  }

  const movimientos = historial.map((cuadros, movimiento) => {
    let description;
    if (movimiento > 0) {
      description = 'Ir hacia la jugada #' + movimiento;
    } else {
      description = 'Ir al inicio del juego';
    }
    return (
      <li key={movimiento}>
        <button onClick={() => saltarHasta(movimiento)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Tablero cuadros={cuadrosActual} xEsSiguiente={xEsSiguiente} onJugada={handleJugada} />
      </div>
      <div className="game-info">
        <ol>{movimientos}</ol>
      </div>
    </div>
  );
};