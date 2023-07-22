import React, { useState } from 'react';

const primerUsuario = {
  id: "12714354",
  nombre: "Daniel",
  apellido: "Rondon",
  ciudad: "Guanare",
  estado: "Portuguesa",
  email: "danfelrondon@gmail.com",
  admin: false
};

function Usuario() {
  const [usuario, setUsuario] = useState(primerUsuario);

  return (
    <div>
      <h1>
        {usuario.nombre} {usuario.apellido} - {usuario.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {usuario.email}</p>
      <p>Ubicacion: {usuario.ciudad}, {usuario.estado}</p>
      <button onClick={() => {
        setUsuario({ ...usuario, admin: true })
      }}>Hacer Administrador</button>
    </div>
  );
};


export default function App() {
  return <Usuario />
};
