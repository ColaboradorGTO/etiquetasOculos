import React, { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { useSidebar } from "../Sidebar/SidebarContext";
import { Menu } from "primereact/menu";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { useQuery } from "react-query";
import { get } from "../../api/funcRequest";
import { InputSwitch } from 'primereact/inputswitch';



export const HeaderMain = ({ optionsModulosPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contador, setContador] = useState(0);
  const { toggleSidebar } = useSidebar();
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const menuLeft = useRef(null);
  const [selectedModule, setSelectedModule] = useState(null)
  const [moduloUsuario, setModuloUsuario] = useState(null);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('usuario');
    if (usuarioArmazenado) {
      const parsedUsuario = JSON.parse(usuarioArmazenado);
      setUsuarioLogado(parsedUsuario);
    }
  }, []);

  useEffect(() => {

  }, [usuarioLogado]);
  const toggleCardUsuario = () => {
    setContador(contador + 1);
    setIsOpen(contador % 2 === 0 ? (isOpen === "" ? "" : "show") : (isOpen === "show" ? "" : "show"));
  };

  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const moduloArmazenado = localStorage.getItem('moduloUsuario');
    if (moduloArmazenado) {
      const parsedModulo = JSON.parse(moduloArmazenado);
      setModuloUsuario(parsedModulo);
    }
  }, [moduloUsuario]);

  useEffect(() => {
    const storedModule = JSON.parse(localStorage.getItem('moduloselecionado'));
    if (storedModule) {
      setSelectedModule(storedModule);
    }
  }, [usuarioLogado, navigate]);
     
  const selecioneModulos = (moduloURL) => {
    const modulos = optionsModulosPage[0]?.modulos || [];
    const moduloEncontrado = modulos.find(modulo => modulo.DSMODULO == moduloURL);

    if (moduloEncontrado) {
      setSelectedModule(moduloEncontrado);
      localStorage.setItem('moduloselecionado', JSON.stringify(moduloEncontrado));
      navigate(`/${moduloEncontrado.DSMODULO}`);
    }
  };

  const modulosDisponiveis = optionsModulosPage[0]?.modulos || [];
  
  const menuItems = modulosDisponiveis?.map((modulo) => ({
    label: modulo.NOME, 
    icon: modulo.src,
    command: () => selecioneModulos(modulo.DSMODULO), 
  }));

  const toggleColorScheme = (value) => {
    setChecked(value);
    document.documentElement.classList.toggle('custom-inverted-colors', value);
  };

  return (
    <Fragment>
      <header className="page-header" role="banner">
        <div className="page-logo" style={{ backgroundColor: "#00ff" }}>
          <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
            <img src="img/logo.png" alt="SoftQuality SAP" aria-roledescription="logo SoftQuality" />
            <span className="page-logo-text mr-1">SoftQuality SAP </span>
            <FaAngleDown className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300" size={50} />
          </a>
        </div>
        <div className=" dropdown-icon-menu position-relative">
          <button onClick={toggleSidebar} className="btn-primary btn js-waves-off" data-action="toggle" data-className="nav-function-hidden">
            <AiOutlineMenuFold className="ni ni-menu" size={20} />
          </button>

        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          {/* <InputSwitch 
            checked={checked} 
            onChange={(e) => toggleColorScheme(e.value)} 
            style={{ marginRight: '1rem' }} 
          /> */}
          <Menu model={menuItems} popup ref={menuLeft} />
          <Button 
            label="Módulos" 
            icon={<FaAngleDown size={20} />}
            onClick={(event) => menuLeft.current.toggle(event)} 
            style={{
              backgroundColor: '#7453A6', 
              color: '#fff', 
              fontWeight: 'bold', 
              borderRadius: '1rem',
              margin: '1rem',
              transition: '0.3s ease-in-out',
              height: '3rem',
            }}
            className="p-3 surface-0 shadow-2"
          />
        </div>


        <div className="ml-auto d-flex">
          <div className={`${isOpen}`}>
            <a style={{ cursor: 'pointer', color: '#000' }} href="#" data-toggle="dropdown" title="suporte@softquality.com.br" className="header-icon d-flex align-items-center justify-content-center ml-2" onClick={toggleCardUsuario}>
              <img src="img/demo/avatars/avatar-suporte.png" className="profile-image rounded-circle" alt="Suporte SoftQualit SAP" />
            </a>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg">
              <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                  <span className="mr-2">
                    <img src="img/demo/avatars/avatar-suporte.png" className="rounded-circle profile-image" alt="Suporte SoftQualit SAP" />
                  </span>
                  <div className="info-card-text">
                    <div className="fs-lg text-truncate text-truncate-lg">
                      {usuarioLogado?.NOFUNCIONARIO}
                    </div>
                    <span className="text-truncate text-truncate-md opacity-80">suporte@gto.softquality.com.br</span>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider m-0"></div>
              <a href="#" className="dropdown-item" data-action="app-reset">
                <span data-i18n="drpdwn.reset_layout">Atendimento de Segunda à Sexta</span>
              </a>
              <a href="#" className="dropdown-item" data-toggle="modal" data-target=".js-modal-settings">
                <span data-i18n="drpdwn.settings">Das 08hs à 12hs - 14hs à 18hs</span>
              </a>
              <div className="dropdown-divider m-0"></div>
              <a href="#" className="dropdown-item" onClick={toggleFullscreen}>
                <span data-i18n="drpdwn.fullscreen">Tela Cheia</span>
                <i className="float-right text-muted fw-n">F11</i>
              </a>
              <a href="https://chamado.gto.inf.br/glpi/" target="_blank" className="dropdown-item" >
                
                <img src="img/icons/logo-GLPI.png" alt="Logo GLPI" style={{width: '40px'}}  />
                <i className="float-right text-muted fw-n">GLPI</i>
              </a>
              <div className="dropdown-divider m-0"></div>
              <a href="/"  className="dropdown-item fw-500 pt-3 pb-3" >
                <span data-i18n="drpdwn.page-logout">Sair</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
