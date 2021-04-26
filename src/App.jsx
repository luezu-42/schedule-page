import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/index';
import TesteContext from './contexts/index';

import GlobalStyle from './styles/GlobalStyles';
import def from './styles/theme/default';

const App = () => {
  const [view, setView] = useState('none');
  return (
    <TesteContext.Provider value={{ view, setView }}>
      <ThemeProvider theme={def}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </TesteContext.Provider>
  );
};

export default App;
