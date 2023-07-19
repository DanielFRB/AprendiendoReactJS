import React, { useState, useEffect } from 'react';

export default function App() {
  const [val, set] = useState("");
  const [frase, setFrase] = useState("Frase de ejemplo");
  const crearFrase = () => {
    setFrase(val);
    set("")
  };

  useEffect(() => {
    console.log(`Escribiendo "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`Frase guardada: "${frase}"`);
  }, [frase]);

  return (
    <>
      <label>Frase favorita: </label>
      <input
        value={val}
        placeholder={frase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={crearFrase}>Enviar</button>
    </>
  );
};
