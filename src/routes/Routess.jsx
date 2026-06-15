import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardAdministrativo } from "../pages/DashBoardAdministrativo";
import { Home } from "../pages/Home";
import { Fragment, useEffect, useState } from "react";
import { ComprasActionDistribuicaoComprasHistorico } from "../componets/Compras/comprasActionDistribuicaoComprasHistorico.jsx";
// import { ComprasPromocao } from "../componets/Compras/comprasPromocao.jsx";
import AuthProvider from "../Providers/AuthContext/index.jsx";



export const RotaMain = ({componentToShow}) => {
  const [isLogged, setIsLogged] = useState(false);
  


  return (
    <BrowserRouter >
    <AuthProvider>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/administrativo" element={<DashBoardAdministrativo componentToShow={componentToShow} />} />

       
        </Routes>

    </AuthProvider>
    </BrowserRouter >
  )
}