import { useState } from 'react'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Image from "../components/Image";
import './App.css'


const App = () =>{
  const movie="The Walking Dead";
  const name="Rick Grimes";
  const src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/08/walking-dead-rick-grimes-2431877.jpg?itok=IT2M2ejI";
  const alt= name;
  const width="400px";
  const height="300px" 
  const sons =[" Carl Grimes", "Judith Grimes"]
  return (
    <div className="App">
      <Title movie={movie}/>
      <Subtitle  name={name}/>
      <Image src={src} alt={alt}  width={width}  height={height}  />
      <Paragraph sons={sons}/>
    </div>
  )
}

export default App
