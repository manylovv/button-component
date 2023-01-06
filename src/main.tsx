import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ThemeProvider, createTheme } from './index';

const theme = createTheme({
  button: {
    backgroundColor: 'red',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Button label="hi" />
    </ThemeProvider>
  </React.StrictMode>
);
