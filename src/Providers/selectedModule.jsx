// SelectedModuleContext.js
import React, { createContext, useContext, useState } from 'react';

const SelectedModuleContext = createContext();

export const SelectedModuleProvider = ({ children }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  const updateSelectedModule = (module) => {
    setSelectedModule(module);
  };

  return (
    <SelectedModuleContext.Provider value={{ selectedModule, updateSelectedModule }}>
      {children}
    </SelectedModuleContext.Provider>
  );
};

export const useSelectedModule = () => {
  const context = useContext(SelectedModuleContext);
  if (!context) {
    throw new Error('useSelectedModule must be used within a SelectedModuleProvider');
  }
  return context;
};
