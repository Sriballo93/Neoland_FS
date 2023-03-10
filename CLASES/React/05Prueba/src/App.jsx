import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'
import Image from './components/Image'


function App() {

const movie="The walking dead";
const name="Rick Grimes";
const src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/08/walking-dead-rick-grimes-2431877.jpg?itok=IT2M2ejI";
const chanel = "AMC";

  return (
    <div className="App">
        <Header>
            <Title movie={movie}/>
        </Header>
        <Main>
          <Subtitle name={name} />
          <Image src={src} />
        </Main>
        <Footer>
            <Paragraph chanel={chanel}/>
        </Footer>
    </div>
  )
}

export default App;
