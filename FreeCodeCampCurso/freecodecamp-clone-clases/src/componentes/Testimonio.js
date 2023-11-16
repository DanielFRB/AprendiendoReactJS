import React from 'react';
import '../css/Testimonio.css';

class Testimonio extends React.Component {
  render() {
    return (
      <div className = 'cont-testimonio'>
        <img className = 'img-testimonio'
          src = {require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt = {`Foto de ${this.props.nombre}`} />
        
        <div className='cont-texto-testimonio'>
          <p className='nomb-testimonio'><strong>{this.props.nombre}</strong> in {this.props.pais}</p>
          <p className='cargo-testimonio'>{this.props.cargo} at <strong>{this.props.empresa}</strong></p>
          <p className='texto-testimonio'>"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  };
};

export default Testimonio;