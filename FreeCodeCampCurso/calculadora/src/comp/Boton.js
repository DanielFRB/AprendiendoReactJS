import React from 'react';
import '../css/Boton.css';

export default function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); 
  };
  return(
    <div className = {`btn-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
      onClick = {() => props.hacerClick(props.children)}>
      {props.children}
    </div>
  );
};