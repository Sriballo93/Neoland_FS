import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeContextProvider } from './context/themeContext'
import { UserContextProvider } from './context/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
     <ThemeContextProvider>
        <UserContextProvider>
          <App/>
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
