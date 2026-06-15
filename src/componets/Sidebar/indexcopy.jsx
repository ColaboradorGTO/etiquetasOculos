import React, { Fragment, useEffect, useState } from 'react';
import { useSidebar } from './SidebarContextCopia';
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const MenuSidebarAdminCopia = ({ handleShowComponent }) => {
  const storedModule = localStorage.getItem('moduloselecionado');
  const selectedModule = JSON.parse(storedModule);
  
  const [activeLink, setActiveLink] = useState('');
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const location = useLocation();

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('usuario');

    if (usuarioArmazenado) {
      const parsedUsuario = JSON.parse(usuarioArmazenado);
      setUsuarioLogado(parsedUsuario);
    }
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleClick = (componentName) => {
    setActiveLink(componentName);
    handleShowComponent(componentName);
  };

  const renderSideBarItems = () => {
    const administrativoUser = selectedModule;
    if (administrativoUser) {
      const sideBarContents = administrativoUser.sideBar;
      
      if (sideBarContents && sideBarContents.length > 0) {
        return (
          <ul id="js-nav-menu" className="nav-menu">
            {sideBarContents.map((sidebarItem, index) => {
              if (!sidebarItem.url) {
                return null;
              }
              return (
                <li key={index} className={activeLink === `/Administrativo${sidebarItem.url}` ? "active" : ""}>
                  <Link to={`/Administrativo${sidebarItem.url}`} onClick={() => handleClick(sidebarItem.url)}>
                    <span className="nav-link-text">
                      {sidebarItem.linkText}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        );
      } else {
        return <p>Sem conteúdo na sidebar para o usuário Administrativo.</p>;
      }
    } else {
      return <p>Usuário Administrativo não encontrado.</p>;
    }
  };

  return (
    <Fragment>
      <aside className={`page-sidebar ${sidebarOpen ? 'sidebar' : ''}`}>
        <div className="page-logo" style={{justifyContent: 'space-around'}}>
          <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
            <span className="page-logo-text mr-1">SoftQuality SAP </span>
          </a>
          {sidebarOpen ? (
            <Fragment>
              <button 
                onClick={toggleSidebar} 
                className="header-btn btn js-waves-off" 
                data-action="toggle" 
                data-className="nav-function-hidden"
                style={{backgroundColor: '#fff'}}
              >
                <AiOutlineMenuFold color={"#5d4286"} size={20} />
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button 
                onClick={toggleSidebar} 
                className="header-btn btn js-waves-off" 
                data-action="toggle" 
                data-className="nav-function-hidden"
                style={{backgroundColor: '#fff'}}
              >
                <AiOutlineMenuUnfold color={"#5d4286"} size={20} />
              </button>
            </Fragment>
          )}
        </div>
        <nav className="primary-nav" role="navigation">
          <div className="nav-filter">
            <div className="position-relative">
              <input type="text" id="nav_filter_input" placeholder="Filter menu" className="form-control" tabIndex="0" />
              <a href="#" onClick={() => false} className="btn-primary btn-search-close js-waves-off" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar">
                <FaAngleDown size={25} color='#00ff' />
              </a>
            </div>
          </div>
          <div className="info-card">
            <img src="img/demo/avatars/avatar-admin.png" className="profile-image rounded-circle" alt="" />
            <div className="info-card-text">
              <a href="#" className="d-flex align-items-center text-white">
                <span className="text-truncate-lg d-inline-block NoFuncionarioTitulo">
                  {usuarioLogado?.NOFUNCIONARIO}
                </span>
              </a>
              <span className="d-inline-block text-truncate-lg NoEmpresaTitulo">
                {usuarioLogado?.NOFANTASIA}
              </span>
            </div>
            <img src="img/card-backgrounds/cover-2-lg.png" className="cover" alt="cover" />
            <a href="#" onClick={() => false} className="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
              <FaAngleDown size={15} color='#fff' />
            </a>
          </div>
          {renderSideBarItems()}
          <div className="filter-message js-filter-message bg-success-600"></div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuSidebarAdminCopia;
