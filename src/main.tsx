import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './stories/Button';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Button label="hi" theme={{ color: 'black', background: 'white' }} />
  </React.StrictMode>
);
