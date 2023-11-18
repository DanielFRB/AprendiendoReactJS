import React from 'react';
import freeCodeCampLogo from '../imgs/freecodecamp.jpg';
import '../css/FreeCodeLogo.css';

export default function FreeCodeLogo() {
  return (
    <div className = 'freecode-logo-container'>
      <img className = 'freecode-logo' src = {freeCodeCampLogo} alt = 'FreeCodeCamp Logo' />
    </div>
  );
};