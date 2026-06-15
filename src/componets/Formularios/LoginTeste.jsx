import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { get, post } from "../../api/funcRequest";
import { useNavigate } from "react-router-dom";

import { allModulos } from "../../../allUsers.json"
import { MenuSidebar } from "../Sidebar";
import { useSelectedModule } from "../../Providers/selectedModule";

export const AuthLoginTeste = () => {
  const navigate = useNavigate();
  const { register, handleSubmit,  } = useForm();
  const [empresaUsuario, setEmpresaUsuario] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [modulo, setModulo] = useState('');
  const [moduloSelecionado, setModuloSelecionado] = useState('');
  const [senha, setSenha] = useState('');
  const [empresaSelecionada, setEmpresaSelecionada] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRedirect, setSelectedRedirect] = useState('');
  const { updateSelectedModule } = useSelectedModule();
  
  useEffect(() => {
    // getUsersLogin()
    getTodasEmpresas()
  }, [])
  

  useEffect(() => {
    if (empresaUsuario.length === 0 && loading) {
      getTodasEmpresas();
    }
  }, [empresaUsuario, loading]);


  const getTodasEmpresas = async () => {
    try {
      
      const response = await get("/empresas", )
      if(response.data) {
        setEmpresaUsuario(response.data)
        // console.log(response.data)
        setModulo(response.data.IDGRUPOEMPRESARIAL)
        setLoading(false)

      }
      // console.log(response.data)
    } catch (error) {
      console.log('Erro ao buscar empresas: ', error)
    }
  }

  const handleEmpresaChange = (e) => {
    setEmpresaSelecionada(e.target.value)
  }

  const handleSenhaChange = (e) => {
    setSenha(e.target.value)
  }
  const handleModuloChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedRedirect(selectedValue)
    setModuloSelecionado(selectedValue)
  }


  const loginSubmit = async () => {
   

    const data = {
      usuario: usuario,
      senha: senha,
      modulo: moduloSelecionado, // Usar o valor selecionado no campo "Módulo"
      empusuario: empresaSelecionada, // Usar o valor selecionado no campo "Empresa"
    };
  
    try {
      const response = await post("/login", data);
  
      if (response && response.user && response.user.token) {
        
        const token = response.user.token;
        localStorage.setItem("token", token);
        const selectedModule = allModulos.find((module) => module.id === parseInt(selectedRedirect));
        localStorage.setItem("selectedModule", selectedModule);

       
        if (selectedModule) {
          updateSelectedModule(selectedModule);
          navigate(selectedModule.name, { state: { selectedModule } });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const storedModule = localStorage.getItem("selectedModule");
      if (storedModule) {
        updateSelectedModule(storedModule); // Atualiza selectedModule com o valor armazenado
      }

      
      navigate('/'); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("selectedModule"); // Remove o selectedModule ao fazer logout
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  
  return (
    <Fragment>

      <form id="js-login"  onSubmit={handleSubmit(loginSubmit)}>
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
          <label className="form-label" htmlFor="mod">Módulo</label>
          <div className="input-group">
            <Form.Select  
              id="modulo" 
              value={selectedRedirect}
              onChange={handleModuloChange}
          
              className="select2 form-control"
              // {...register("Módulo", { required: true })}
            >
              <option value="0" style={{padding: "10px"}} > Selecione ...</option>
              {allModulos.map((modulo) => (
              
                <Fragment key={modulo.id}>
                  <option 
                    style={{padding: "10px",  fontSize: "18px", margin: "20px"}}  
                    value={modulo.id}>
                    {modulo.name}
                  </option>
             
                </Fragment>
              ))
              }
            </Form.Select>
          </div>
        </div>
        <div id="containerLoja" className="form-group ">
          <label className="form-label" htmlFor="modemp">Empresa</label>
          <div className="input-group">
            <select 
              name="empresa" 
              id="empresa" 
              className="select2 form-control"
              value={empresaSelecionada}
              onChange={handleEmpresaChange}
            >
            {empresaUsuario.map((empresa) => (
                <Fragment key={empresa.id}>
                  <option value={empresa.id}>{empresa.NOFANTASIA}</option>

                </Fragment>
              ))} 
             
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="usuario">Matrícula</label>
          <input  
           
           id="usuario" 
           className="form-control input form-control-lg" 
           type="number" 
           placeholder="Matrícula" 
          //  {...register("Matrícula", {
          //    required: true, 
          //   })}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            // pattern: /\D/g, ' ',  /(\d{3})(\d)/, '$1.$2', /(\d{3})(\d)/, '$1.$2', /(\d{3})(\d)/, '$1-$2', /(-\d{2})\d+?$/, '$1'/i
          
            // })}, 
           
           
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
            // {...register("Senha", 
            // {
            //   required: true,
              
            // })} 
            value={senha}
            onChange={handleSenhaChange}
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
  )
}
