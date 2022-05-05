import './App.css';
import Boton from './comp/Boton.js';
import Contador from './comp/Contador.js';
import freeCodeCampLogo from './imgs/freecodecamp.jpg';
import { useState } from 'react';

function App() {
  const [numeClicks, setNumeClicks] = useState(0);
  const manejarClick = () => { setNumeClicks(numeClicks + 1); };
  const reiniciarContador = () => { setNumeClicks(0); };
  return (
    <div className = 'App'>
      <div className = 'freecode-logo-container'>
        <img className = 'freecode-logo'
          src={ freeCodeCampLogo }
          alt='FreeCodeCamp Logo' />
      </div>
      <div className = 'click-container'>
        <Contador numClicks = { numeClicks } />
        <Boton texto = 'Click' esBotonDeClick = { true } manejarClick = { manejarClick } />
        <Boton texto = 'Reiniciar' esBotonDeClick = { false } manejarClick = { reiniciarContador } />
      </div>
    </div>
  );
}

export default App;