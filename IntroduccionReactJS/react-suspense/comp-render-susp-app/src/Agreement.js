import React from "react";

export default function Agreement({ onAgree = f => f}) {
  return (
    <div>
      <p>Terminos...</p>
      <p>Estos son los terminos y condiciones. Estas de acuerdo?</p>
      <button onClick={onAgree}>De Acuerdo</button>
    </div>
  );
}
