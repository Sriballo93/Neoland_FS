import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserContextProvider } from './context/userContext';
import Gridlayout from './layout/Gridlayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Gridlayout>
          <App />
        </Gridlayout>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
