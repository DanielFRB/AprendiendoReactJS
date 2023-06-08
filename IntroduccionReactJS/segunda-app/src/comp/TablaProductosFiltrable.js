import React, { useState } from "react";
import BarraBusqueda from "./BarraBusqueda";
import TablaProducto from "./TablaProducto";

export default function TablaProductosFiltrable({ productos }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <BarraBusqueda 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <TablaProducto 
        productos={productos} 
        filterText={filterText} 
        inStockOnly={inStockOnly} />
    </div>
  );
};