import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <>
   <h2>Home Page</h2>
    <p>App ejemplo sobre  React Router</p>
    <ul>
      <li>
        <p>
          <span>Vista la Pagina de heroes 🦸</span>
          <Link to="heroes">Heroes</Link>
        </p>
      </li>
    </ul>
</>  
  )
}

export default Home;