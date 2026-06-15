import React, { Fragment, useEffect, useState } from 'react';
import { useSidebar } from './SidebarContext';
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const MenuSidebarAdmin = ({ componentToShow, handleShowComponent }) => {
  const storedModule = localStorage.getItem('moduloselecionado');
  const selectedModule = JSON.parse(storedModule);
  const [activeLink, setActiveLink] = useState('');
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('usuario');

    if (usuarioArmazenado) {
      const parsedUsuario = JSON.parse(usuarioArmazenado);
      setUsuarioLogado(parsedUsuario);
    }
  }, [])

  useEffect(() => {
  }, [usuarioLogado, selectedModule])

  const handleClick = (componentName) => {
    setActiveLink(componentName);
    handleShowComponent(componentName);
  };


  const renderSideBarItems = () => {
    const administrativoUser = selectedModule?.menuPai.menuFilho;

    if (administrativoUser && administrativoUser.length > 0) {
      return (
        <ul id="js-nav-menu" className="nav-menu">
          {administrativoUser.map((menuItem, index) => {
            const { ID, DSNOME, URL } = menuItem;
            if (!URL) {
              return null;
            }
            return (
              <li key={ID || index} className={activeLink === URL ? "active" : ""}>
                <a href="#" onClick={() => handleClick(URL)}>
                  <span className="nav-link-text">
                    {DSNOME}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>{`Sem conteúdo na sidebar para o usuário ${usuarioLogado?.NOFUNCIONARIO}.`}</p>;
    }
  };

  return (
    <Fragment>

      <aside className={`page-sidebar ${sidebarOpen ? 'sidebar' : ''}`}>


        <div className="page-logo" style={{ justifyContent: 'space-around' }} >
          <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
            <span className="page-logo-text mr-1">SoftQuality SAP  </span>
          </a>

          {sidebarOpen ? (
            <Fragment>

              <button
                onClick={toggleSidebar}
                className="header-btn btn js-waves-off"
                data-action="toggle"
                style={{ backgroundColor: '#fff' }}
              >
                <AiOutlineMenuFold
                  color={"#5d4286"}

                  size={20}
                />
              </button>
            </Fragment>

          ) : (
            <Fragment>

              <button
                onClick={toggleSidebar}
                className="header-btn btn js-waves-off"
                data-action="toggle"
                style={{ backgroundColor: '#fff' }}
              >
                <AiOutlineMenuUnfold color={"#5d4286"} size={20} />
              </button>
            </Fragment>

          )}
        </div>

        <nav id="js-primary-nav" className="primary-nav" role="navigation">

          <div className="nav-filter">
            <div className="position-relative">
              <input type="text" id="nav_filter_input" placeholder="Filter menu" className="form-control" />
              <a href="#" onclick="return false;" className="btn-primary btn-search-close js-waves-off" data-action="toggle"  data-target=".page-sidebar">
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
            <a href="#" onclick="return false;" className="pull-trigger-btn" data-action="toggle" data-target=".page-sidebar" data-focus="nav_filter_input">
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