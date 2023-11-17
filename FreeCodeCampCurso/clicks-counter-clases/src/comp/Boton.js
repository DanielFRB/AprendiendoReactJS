import React from 'react';
import '../css/Boton.css';

class Boton extends React.Component {
  render() {
    return (
      <button className = {this.props.esBotonDeClick ? 'boton-click' : 'boton-reinicio'} onClick = {this.props.manejarClick}>
        {this.props.texto}
      </button>
    );
  };
};

export default Boton;
