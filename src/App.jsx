import React from 'react';

import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/index';

import GlobalStyle from './styles/GlobalStyles';
import def from './styles/theme/default';

const App = () => (
  <ThemeProvider theme={def}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);

export default App;
