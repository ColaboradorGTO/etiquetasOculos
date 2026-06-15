import React, { createContext, useContext, useState } from "react";

const VoucherContext = createContext();

export const VoucherProvider = ({ children }) => {
  const [tabelaVisivel, setTabelaVisivel] = useState(false);
  const [tabelaVendasClientes, setTabelaVendasClientes] = useState(false);
  const [actionPrincipal, setActionPrincipal] = useState(true);
  const [actionSecundaria, setActionSecundaria] = useState(false);

  return (
    <VoucherContext.Provider
      value={{
        tabelaVisivel,
        setTabelaVisivel,
        tabelaVendasClientes,
        setTabelaVendasClientes,
        actionPrincipal,
        setActionPrincipal,
        actionSecundaria,
        setActionSecundaria,
      }}
    >
      {children}
    </VoucherContext.Provider>
  );
};

export const useVoucherContext = () => useContext(VoucherContext);
