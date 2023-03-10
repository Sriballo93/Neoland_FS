import { useState } from 'react'
import { Greeting } from '../components/Greeting';
import './App.css'

function App() {
 
const name="Sebastian Riballo";

  return (
    <div className="App">
      <Greeting name={name} />
    </div>
  )
}

export default App
