import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


function PrivateRoute({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);


  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('usuario');

    if (usuarioArmazenado) {
      const parsedUsuario = JSON.parse(usuarioArmazenado);
      setUsuarioLogado(parsedUsuario);
    }
  }, [])

  useEffect(() => {

  }, [usuarioLogado])

  return  usuarioLogado ? children : <Navigate to="/"  />

}

export default PrivateRoute;
