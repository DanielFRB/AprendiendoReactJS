import React, { useReducer } from 'react';

function Checkbox() {
  const [checked, palanca] = useReducer(checked => !checked, false);

  return (
    <>
      <input
        type='checkbox'
        value={checked}
        onChange={palanca}
      />
      {checked ? "Comprobado" : "No Comprobado"}
    </>
  );
};

function Numeros() {
  const [numero, setNumero] = useReducer((numero, nuevoNumero) => numero + nuevoNumero, 0);
  return <h1 onClick={() => setNumero(1)}>{numero}</h1>
}

export default function App() {
  return (
    <>
      <Checkbox />
      <br />
      <h1>Conteo de Numeros:</h1>
      <Numeros />
    </>
  );
};
