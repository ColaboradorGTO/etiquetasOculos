import React, { Fragment } from "react"
import { useAuth } from "../../Providers/AuthContext";


export const AuthLogin = () => {
  const {
    usuario,
    senha,
    handleSenhaChange,
    handleUsuarioChange,
    loginSubmit,
  } = useAuth()


  return (
    <Fragment>
      <form onSubmit={loginSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="grupempresa">Grupo Empresarial</label>
          <input 
            type="text" 
            id="grupoempresa" 
            className="form-control input form-control-lg" 
            value="GTO - GRUPO TESOURA DE OURO" 
            readOnly 
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="usuario">Matrícula</label>
          <input  
            className="form-control input form-control-lg" 
            type="number" 
            placeholder="Matrícula" 
            value={usuario}
            onChange={handleUsuarioChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                loginSubmit(e);
              }
            }}
          />
          <div className="invalid-feedback">Digite o Usuário</div>
          <div className="help-block">O usuário é o número da sua empresa no sistema</div>
        </div>
        <div className="form-group ">
          <label className="form-label" htmlFor="senha">Senha</label>
          <input 
            type="password"
            className="form-control input form-control-lg" 
            placeholder="Senha" 
            value={senha}
            onChange={handleSenhaChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                loginSubmit(e);
              }
            }}
          />
          <div className="invalid-feedback">Digite a Senha</div>
          <div className="help-block">Sua Senha</div>
        </div>
        <div className="row no-gutters mb-2">
          <div className="col-lg-6 pl-lg-1 my-2">
            <button 
              id="Acessar" 
              type="submit" 
              className="btn btn-danger btn-block btn-lg input"
            >
              Entrar
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
}