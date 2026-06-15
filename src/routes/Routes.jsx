import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, useEffect, useState, Suspense, lazy } from "react";
import AuthProvider from "../Providers/AuthContext";
import { Home } from "../pages/Home";


const DashBoardGerencia = lazy(() => import("../pages/DashBoardGerencia").then(module => ({ default: module.DashBoardGerencia })));

// Componente de Loading
const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Carregando...</span>
    </div>
  </div>
);

export const RoutesMain = () => {
  const [componentToShow, setComponentToShow] = useState("");
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('usuario');
    if (usuarioArmazenado) {
      const parsedUsuario = JSON.parse(usuarioArmazenado);
      setUsuarioLogado(parsedUsuario);
    }
  }, []);

  useEffect(() => {

  }, [usuarioLogado]);

 

  const handleShowComponent = (componentName) => {
    setComponentToShow(componentName);
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
  
        <Route path="/DashBoardGerencia" element={<DashBoardGerencia componentToShow={componentToShow} handleShowComponent={handleShowComponent}  /> } />

      </Routes>
    </Suspense>
  );
};