import React from 'react';
import freeCodeCampLogo from '../imgs/freecodecamp.png';
import '../css/FreeCodeLogo.css';

function FreeCodeLogo() {
  return (
    <div className = 'freecode-logo-container'>
      <img className = 'freecode-logo' src = {freeCodeCampLogo} alt = 'FreeCodeCamp Logo' />
    </div>
  );
};

export default FreeCodeLogo;
