import React, { useState, createContext } from 'react';

export const Search = createContext();

// eslint-disable-next-line react/prop-types
export const SearchContext = ({ children }) => {
  const [newListValue, setNewListValue] = useState('');
  return (
    <Search.Provider
      value={{
        newListValue,
        setNewListValue,
      }}
    >
      {children}
    </Search.Provider>
  );
};
