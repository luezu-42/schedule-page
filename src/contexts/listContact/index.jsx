import React, { createContext, useState } from 'react';
import api from '../../api/index';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const ContextPr = ({ children }) => {
  const [data, setData] = useState(api());
  const Filter = () => {
    if (data === null) {
      setData([]);
    }
  };
  Filter();
  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
