import React from 'react'
import "./_header.css"
import logo from "../../public/logoNasa.png"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
          <img src={logo} className="logo" alt='LogoNASA'/>
          <h2  className="title-bar">NASA API</h2>
          <nav>
            <ul>
            <NavLink to="/">HOME</NavLink>
              <NavLink to="apods" >APODS</NavLink>
              <NavLink to="planets">PLANETS</NavLink>
            </ul>
          </nav>
    
    </div>
  )
}

export default Header