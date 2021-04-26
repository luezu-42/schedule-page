import React, { useState, createContext } from 'react';

export const OptionsContext = createContext();

// eslint-disable-next-line react/prop-types
export const Options = ({ children }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    tel: '',
    color: '',
    id: '',
  });

  return (
    <OptionsContext.Provider value={{ contact, setContact }}>
      {children}
    </OptionsContext.Provider>
  );
};
