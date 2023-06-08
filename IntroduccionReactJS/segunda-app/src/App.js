import React from "react";
import TablaProductosFiltrable from "./comp/TablaProductosFiltrable";

export default function App() {
  const PRODUCTS = [
    {categoria: "Frutas", precio: "$1", almacenado: true, nombre: "Apple"},
    {categoria: "Frutas", precio: "$1", almacenado: true, nombre: "Dragonfruit"},
    {categoria: "Frutas", precio: "$2", almacenado: false, nombre: "Passionfruit"},
    {categoria: "Vegetales", precio: "$2", almacenado: true, nombre: "Spinach"},
    {categoria: "Vegetales", precio: "$4", almacenado: false, nombre: "Pumpkin"},
    {categoria: "Vegetales", precio: "$1", almacenado: true, nombre: "Peas"}
  ];
  
  return (
    <div className="App">
      <TablaProductosFiltrable 
        productos={PRODUCTS} />
    </div>
  );
};