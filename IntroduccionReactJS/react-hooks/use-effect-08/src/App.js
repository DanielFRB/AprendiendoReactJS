import React, { useState, useEffect, useCallback } from 'react';

const useAnyKeyToRender = () => {
  const [, forzarRenderizado] = useState();
  useEffect(() => {
    window.addEventListener("keydown", forzarRenderizado);
    return () => window.removeEventListener("keydown", forzarRenderizado);
  }, []);
};

function CuentaPalabras({ children = ""}) {
  useAnyKeyToRender();
  const fn = useCallback(() => {
    console.log("Hola");
    console.log("Mundo");
  }, []);

  useEffect(() => {
    console.log("Renderizado fresco");
    fn();
  }, [fn]);

  return (
    <>
      <p>{children}</p>
    </>
  );
};

export default function App() {
  return <CuentaPalabras>Esta es una prueba de conteo de palabras</CuentaPalabras>
};
