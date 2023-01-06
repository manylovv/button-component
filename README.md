# button-component
Install via npm: 
```bash
npm install storybook-button-component
```
Basic usage example:
```js
import { Button, ThemeProvider, defaultTheme } from 'storybook-button-component';

// Entry point of your app
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button label="hi" />
    </ThemeProvider>
  );
 }
```
Basic usage example with theme overriding: 
```js
import { Button, ThemeProvider, createTheme } from 'storybook-button-component';

const theme = createTheme({
  button: {
    backgroundColor: 'red',
    borderRadius: '8px'
  },
});

// Entry point of your app
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button label="hi" />
    </ThemeProvider>
  );
 }
```

