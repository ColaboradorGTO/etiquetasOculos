import React, { createContext, useContext, useState } from 'react';
import { post } from '../../api/funcRequest';

const AuthContext = createContext();

export function AuthSwalProvider({ children }) {
  const [empresaUsuario, setEmpresaUsuario] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [empresaSelecionada, setEmpresaSelecionada] = useState('');
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const loginSubmit = async () => {
    const data = {
      usuario: usuario,
      senha: senha,
      empusuario: empresaSelecionada,
      
    };

    try {
      const response = await post('/login', data);

      if (response && response.user && response.user.token) {
        const token = response.user.token;
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(response.user));
        setUsuario(response.user);
        setIsLoggedIn(true);
      }

      return response.user;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        empresaUsuario,
        usuario,
        senha,
        empresaSelecionada,
        loading,
        handleSenhaChange,
        handleUsuarioChange,
        loginSubmit,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthSwalProvider;

export const useSwal = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useSwal deve ser usado dentro de um AuthProvider');
  }

  return context;
}
