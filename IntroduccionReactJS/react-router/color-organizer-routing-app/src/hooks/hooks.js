import { useState, createContext, useContext } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};

const ColorContext = createContext();

export const useColors = () => {
  const constant = useContext(ColorContext);
  return constant;
};
