import React from 'react';
import './App.css';
import Boton from './comp/Boton.js';
import Contador from './comp/Contador.js';
import freeCodeCampLogo from './imgs/freecodecamp.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {numClicks : 0};
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  };

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks : numClicks + 1 }));
  };

  reiniciarContador() {
    this.setState({ numClicks : 0 }); 
  };

  render() {
    return (
      <div className = 'App'>
        <div className = 'freecode-logo-container'>
          <img className = 'freecode-logo'
            src={freeCodeCampLogo}
            alt='FreeCodeCamp Logo' />
        </div>
        <div className = 'click-container'>
          <Contador numClicks = {this.state.numClicks} />
          <Boton texto = 'Click' esBotonDeClick = {true} manejarClick = {this.manejarClick} />
          <Boton texto = 'Reiniciar' esBotonDeClick = {false} manejarClick = {this.reiniciarContador} />
        </div>
      </div>
    );
  };
};

export default App;
