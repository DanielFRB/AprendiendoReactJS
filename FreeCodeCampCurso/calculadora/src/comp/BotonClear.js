import React from 'react';
import '../css/BotonClear.css';

const BotonClear = (props) => (
  <div className = 'btn-clear' onClick = {props.hacerClick}>
    {props.children}
  </div>
);

export default BotonClear;