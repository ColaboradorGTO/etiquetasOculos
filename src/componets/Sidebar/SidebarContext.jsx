import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contador, setContador] = useState(0);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth < 365) {
        document.body.classList.add('mobile-nav-on');
      } else {
        document.body.classList.remove('mobile-nav-on');
      }
    };
   
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarRef])

  const toggleSidebar = () => {
    setContador(contador + 1);
    if (contador % 2 === 0) { 
      setSidebarOpen(!sidebarOpen);
    } else {
      setSidebarOpen(!sidebarOpen === "" ? "nav-function-minify" : "");
    }
  };
  
  const sidebarClass = sidebarOpen ? 'nav-function-hidden ' ? 'nav-function-minify mobile-nav-on'  : '' : '';
  
  const toggleSidebarClass = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SideBarContext.Provider value={{ sidebarOpen, toggleSidebar, toggleSidebarClass, sidebarClass }}>
      <div ref={sidebarRef} className={`mod-bg-1 desktop chrome webkit mobile-view-activated pace-done blur ${sidebarClass}`}>
        {children}
        
      </div>
    </SideBarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
