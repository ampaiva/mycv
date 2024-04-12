import React, { createContext, useContext, useState } from 'react';

// Create a context
const LabelsContext = createContext();

// Create a provider component
export const LabelsProvider = ({ children }) => {
  const [labelStates, setLabelStates] = useState({});

  return (
    <LabelsContext.Provider value={{ labelStates, setLabelStates }}>
      {children}
    </LabelsContext.Provider>
  );
};

// Custom hook to use the global state
export const useLabels = () => {
  const context = useContext(LabelsContext);
  if (!context) {
    throw new Error('useLabels must be used within a LabelsProvider');
  }
  return context;
};
