export default function CalculaGanador(cuadros) {
  const lineas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lineas.length; i++) {
    const [a, b, c] = lineas[i];
    if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
      return cuadros[a];
    };
  };
  return null;
};