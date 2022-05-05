import React from 'react';
import '../css/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='cont-testimonio'>
      <img className='img-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma' />
      
      <div className='cont-texto-testimonio'>
        <p className='nomb-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;