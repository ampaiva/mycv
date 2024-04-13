import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalContextProvider = ({ children }) => {
  const [globalContext, setGlobalContext] = useState({"isGlobalSelected": true, "labelSelected": {}});

  return (
    <GlobalContext.Provider value={{ globalContext, setGlobalContext }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};
