import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { Fragment, useEffect, useState } from 'react';
import { allModulos } from '../../../allUsers.json';
import { useSidebar } from './SidebarContext';
import { useNavigate } from 'react-router-dom';


export const MenuSidebar = ({ handleShowComponent, selectedModule, selectedUser }) => {
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleClick = (componentName) => {
    handleShowComponent(componentName);
    setActiveLink(componentName);
    navigate(componentName)
  };

 

  const renderSideBarItems = () => {
    const administrativoUser =  selectedModule;
    if (administrativoUser) {

      const sideBarContents = administrativoUser.sideBar;

      if (sideBarContents && sideBarContents.length > 0) {
        return (
          <ul id="js-nav-menu" className="nav-menu">
            {sideBarContents.map((sidebarItem, index) => (
              <li key={index} className={activeLink === sidebarItem.action ? "active" : ""} >
                <a href={sidebarItem.action} onClick={(e) => {
                  e.preventDefault();
                  handleClick(sidebarItem.action)
                }}>
                  {/* {console.log(sidebarItem)} */}
                  <span className="nav-link-text">
                    {sidebarItem.title}
                  </span>
                </a>
              </li>
            ))}
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

    <aside className={`page-sidebar ${sidebarOpen ? 'sidebar' : ''}`}>
      <div
        className="toggle-button d-flex "
        style={{ cursor: 'pointer', alignContent: 'right', justifyContent: 'flex-end', paddingRight: '30px', marginTop: '10px' }}
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <AiOutlineMenuUnfold className="fal fa-angle-down color-primary-300" size={40} />
        ) : (
          <AiOutlineMenuFold className="fal fa-angle-up color-primary-300" size={40} />
        )}
      </div>

      <nav id="js-primary-nav" className="primary-nav" role="navigation">
        {/* Restante do código... */}
        {renderSideBarItems()}
        <div className="filter-message js-filter-message bg-success-600"></div>
      </nav>
    </aside>


  );
};