import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apod from './components/Apod'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Planets from './pages/Planets'
import PlanetsDetail from "./pages/PlanetsDetail"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route index element={<Home/>} />
          <Route path="/apods" element={<Apod />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:planetName" element={<PlanetsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
