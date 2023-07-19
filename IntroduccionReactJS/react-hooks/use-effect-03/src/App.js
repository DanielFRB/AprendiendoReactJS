import React, { useState, useEffect } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`Comprobado: ${checked.toString()}`);
  });
  
  return (
    <>
      <input
        type='checkbox'
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "Comprobado" : "No Comprobado"}
    </>
  );
};

export default function App() {
  return <Checkbox />;
};
