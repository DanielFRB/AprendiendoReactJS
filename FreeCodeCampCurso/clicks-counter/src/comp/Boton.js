import React from 'react';
import '../css/Boton.css';

export default function Boton({texto, esBotonClick, manejarClick}) {
  return (
    <button className = {esBotonClick ? 'boton-click' : 'boton-reinicio'} onClick = {manejarClick}>
      {texto}
    </button>
  );
};