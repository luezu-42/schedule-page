import React, { useState, createContext } from 'react';

export const PopContext = createContext();

// eslint-disable-next-line react/prop-types
export const PopUp = ({ children }) => {
  const [view, setView] = useState('none');
  const [edit, setEdit] = useState('none');
  const [del, setDel] = useState('none');

  return (
    <PopContext.Provider
      value={{
        view,
        setView,
        edit,
        setEdit,
        del,
        setDel,
      }}
    >
      {children}
    </PopContext.Provider>
  );
};
