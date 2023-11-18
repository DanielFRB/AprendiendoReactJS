import './App.css';
import Boton from './comp/Boton.js';
import Pantalla from './comp/Pantalla.js';
import BotonClear from './comp/BotonClear.js';
import FreeCodeLogo from './comp/FreeCodeLogo.js';
import { useState } from 'react';
import { evaluate } from 'mathjs'

export default function App() {
  const [input, setInput] = useState('');
  const addInput = value => {
    setInput(input + value);
  };
  const getResult = () => {
    if(input) { 
      setInput(evaluate(input));
    } else { 
      alert('Favor Ingrese numeros para realizar el calculo');
    };
  };
  
  return (
    <div className = 'App'>
      <FreeCodeLogo />
      <div className = 'calculadora-container'>
        <Pantalla input = { input } />
        <div className = 'fila'>
          <Boton hacerClick = { addInput }>1</Boton>
          <Boton hacerClick = { addInput }>2</Boton>
          <Boton hacerClick = { addInput }>3</Boton>
          <Boton hacerClick = { addInput }>+</Boton>
        </div>
        <div className = 'fila'>
          <Boton hacerClick = { addInput }>4</Boton>
          <Boton hacerClick = { addInput }>5</Boton>
          <Boton hacerClick = { addInput }>6</Boton>
          <Boton hacerClick = { addInput }>-</Boton>
        </div>
        <div className = 'fila'>
          <Boton hacerClick = { addInput }>7</Boton>
          <Boton hacerClick = { addInput }>8</Boton>
          <Boton hacerClick = { addInput }>9</Boton>
          <Boton hacerClick = { addInput }>*</Boton>
        </div>
        <div className = 'fila'>
          <Boton hacerClick = { addInput }>0</Boton>
          <Boton hacerClick = { addInput }>.</Boton>
          <Boton hacerClick = { getResult }>=</Boton>
          <Boton hacerClick = { addInput }>/</Boton>
        </div>
        <div className = 'fila'>
          <BotonClear hacerClick = {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
};
