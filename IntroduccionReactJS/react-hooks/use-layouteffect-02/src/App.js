import React, { useState, useLayoutEffect } from 'react';

function useWindowSize() {
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);
  const cambiaMedida = () => {
    setAncho(window.innerWidth);
    setAlto(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", cambiaMedida);
    cambiaMedida();
    return () => window.removeEventListener("resize", cambiaMedida);
  }, []);

  return [ancho, alto];
};

function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return [x, y];
}

export default function App() {
  const [w, h] = useWindowSize();
  const [izquierda, tope] = useMousePosition();
  return (
    <>
      <div>
        {w}x{h}
      </div>
      <div style={{ position: "absolute", tope, izquierda, cursor: "none" }}>
        {tope}x{izquierda}
    </div>
    </>
    
  );
};
