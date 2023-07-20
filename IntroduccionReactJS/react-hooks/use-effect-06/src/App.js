import React, { useState, useEffect } from 'react';

const useAnyKeyToRender = () => {
  const [, forzarRenderizado] = useState();
  useEffect(() => {
    window.addEventListener("keydown", forzarRenderizado);
    return () => window.removeEventListener("keydown", forzarRenderizado);
  }, []);
};

export default function App() {
  useAnyKeyToRender();
  useEffect(() => {
    console.log("Renderizado fresco");
  });

  return <h1>Abrir la consola del navegador</h1>
};
