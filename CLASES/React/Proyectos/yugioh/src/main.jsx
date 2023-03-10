import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Cards from './pages/Cards'
import { YugiContextProvider } from './pages/context/yugiContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename='/'>
     <YugiContextProvider>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/Cards" element={<Cards/>}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
      </YugiContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
