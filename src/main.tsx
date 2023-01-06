import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ThemeProvider, defaultTheme } from './index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Button label="hi" />
    </ThemeProvider>
  </React.StrictMode>
);
