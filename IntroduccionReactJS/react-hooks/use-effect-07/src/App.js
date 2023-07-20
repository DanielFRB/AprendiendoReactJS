import React, { useState, useEffect, useMemo } from 'react';

const useAnyKeyToRender = () => {
  const [, forzarRenderizado] = useState();
  useEffect(() => {
    window.addEventListener("keydown", forzarRenderizado);
    return () => window.removeEventListener("keydown", forzarRenderizado);
  }, []);
};

function CuentaPalabras({ children = ""}) {
  useAnyKeyToRender();
  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("Renderizado fresco");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} palabras</strong>
      </p>
    </>
  );
};

export default function App() {
  return <CuentaPalabras>Esta es una prueba de conteo de palabras</CuentaPalabras>
};
