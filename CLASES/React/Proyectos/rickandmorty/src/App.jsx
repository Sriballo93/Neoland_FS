import React from 'react';
import './App.css'

import CharacterList from './components/CharacterList';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Paragraph from './components/Paragraph';
import Title from './components/Title';
import Image from './components/Image';


const App=()=> {

  const title="RickandMorty";
  const text="Created by Neoland";
  const text1="Created by Sebas";
  const name= "Neoland";
  const image= "../public/download.png";
  return <div>
         <Header>
            <Title title={title} />
          </Header>
          <Main>
              <CharacterList/>
          </Main>
          <Footer>
            <Paragraph text={text} />
            <Image image={image} name={name}/>
            <Paragraph text1={text1}/>
          </Footer>
    
  </div>;
};

export default App;
