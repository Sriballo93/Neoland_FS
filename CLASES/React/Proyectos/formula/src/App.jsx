import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Layout from "./components/Layout"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Pilots from '../pages/Pilots'
import NotFound from '../pages/NotFound'
import ProtectedRoute from "./components/ProtectedRoute"
import Nationalities from "../pages/Nationalities"
import Teams from "../pages/Teams"

const App =() =>{
 

  return (
    <Layout>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/pilots" element={  
             <ProtectedRoute>
                <Pilots/>
            </ProtectedRoute>}/>
            <Route path="/nationalities" element={  
             <ProtectedRoute>
                <Nationalities/>
            </ProtectedRoute>}/>
            <Route path="/teams" element={  
             <ProtectedRoute>
                <Teams/>
            </ProtectedRoute>}/>
        </Routes>
        <Footer/>
      </div>
    </Layout>
  )
}

export default App
