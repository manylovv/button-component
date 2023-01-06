# button-component
Install via npm: 
```bash
npm install storybook-button-component
```
Basic usage example: 
```js
import { Button } from 'storybook-button-component';

function App() {
  return (
    <Button label="Click me!"/>
  );
}
```
Styling overriding with your own css rules using "theme" property: 
```js
<Button
  label="Click me!"
  theme={{
    color: 'white',
    backgroundColor: '#4169E1',
    borderRadius: '8px'
  }}
/>
```
