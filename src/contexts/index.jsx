import React, { createContext, useState } from 'react';
import api from '../api/index';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const ContextPr = ({ children }) => {
  const [value, setValue] = useState(api());
  const Filter = () => {
    if (value === null) {
      setValue([]);
    }
  };
  Filter();
  return (
    <Context.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};
