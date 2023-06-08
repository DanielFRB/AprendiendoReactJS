import React from "react";

export default function BarraBusqueda({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Buscar..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <br />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Solamente muestra productos en stock
      </label>
    </form>
  );
};