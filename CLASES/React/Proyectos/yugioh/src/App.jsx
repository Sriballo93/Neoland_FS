
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'

const App=()=> {

  return (
    <div className="App">
        <Layout>
            <Header/>
            <Outlet/>
            <Footer/>
        </Layout>
    </div>
  )
}

export default App
