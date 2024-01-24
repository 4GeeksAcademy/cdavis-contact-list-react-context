// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ContactProvider } from './views/ContactContext';
import Home from './home';

const root = document.getElementById('root');

// Antes de React 18
// ReactDOM.render(
//   <React.StrictMode>
//     <ContactProvider>
//       <Home />
//     </ContactProvider>
//   </React.StrictMode>,
//   root
// );

// React 18
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <ContactProvider>
      <Home />
    </ContactProvider>
  </React.StrictMode>
);
