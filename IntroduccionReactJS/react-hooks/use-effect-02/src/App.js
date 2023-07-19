import React, { useState } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

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

  alert(`Comprobado: ${checked.toString()}`);
};

export default function App() {
  return <Checkbox />;
};
