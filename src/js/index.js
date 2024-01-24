// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ContactProvider } from './views/ContactContext';
import Home from './home';

ReactDOM.render(
  <React.StrictMode>
    <ContactProvider>
      <Home />
    </ContactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
