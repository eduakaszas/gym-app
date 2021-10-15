import React from 'react';
import ReactDOM from 'react-dom';

import Entry from './components/Entry/Entry';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Entry />
      </div>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
