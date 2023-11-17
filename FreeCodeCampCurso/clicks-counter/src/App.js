import './App.css';
import Boton from './comp/Boton.js';
import Contador from './comp/Contador.js';
import freeCodeCampLogo from './imgs/freecodecamp.jpg';
import { useState } from 'react';

function MyApp() {
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {setNumClicks(numClicks + 1)};
  const reiniciarContador = () => {setNumClicks(0)};
  return (
    <div className = 'App'>
      <div className = 'freecode-logo-container'>
        <img className = 'freecode-logo'
          src={freeCodeCampLogo}
          alt='FreeCodeCamp Logo' />
      </div>
      <div className = 'click-container'>
        <Contador numClicks = {numClicks} />
        <Boton texto = 'Click' esBotonClick = {true} manejarClick = {manejarClick} />
        <Boton texto = 'Reiniciar' esBotonClick = {false} manejarClick = {reiniciarContador} />
      </div>
    </div>
  );
};

export default MyApp;
