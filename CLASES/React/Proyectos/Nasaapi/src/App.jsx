
import React from 'react';
import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Layout from './layout/Layout';
import { Outlet } from 'react-router-dom';

const App =()=> {

  return (
    <div className="App">
       <Layout>
        <Header>
        </Header>
        <Main>
          <Outlet/>
        </Main>
      <Footer>
      </Footer>
      </Layout>
    </div>
  )
}

export default App
