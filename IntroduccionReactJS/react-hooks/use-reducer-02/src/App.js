import React, { useState } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  function palanca() {
    setChecked(checked => !checked);
  };

  return (
    <>
      <input
        type='checkbox'
        value={checked}
        onChange={palanca}
      />
      {checked ? "Comprobado" : "No Comprobado"}
    </>
  );
};

export default function App() {
  return <Checkbox />;
};
