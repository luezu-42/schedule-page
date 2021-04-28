import React from 'react';

import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/index';
import { ContextPr } from './contexts/index';
import { PopUp } from './contexts/PopUpForm/index';

import GlobalStyle from './styles/GlobalStyles';
import defaultTheme from './styles/theme/default';

const App = () => (
  <ContextPr>
    <PopUp>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </PopUp>
  </ContextPr>
);

export default App;
