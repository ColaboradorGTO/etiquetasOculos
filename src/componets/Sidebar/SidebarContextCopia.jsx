import React, { createContext, useContext, useState } from 'react';

const SidebarContextCopia = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContextCopia);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProviderCopia = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarContextCopia.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContextCopia.Provider>
  );
};
