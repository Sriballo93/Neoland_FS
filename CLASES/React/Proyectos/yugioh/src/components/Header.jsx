import React from 'react'
import { NavLink } from 'react-router-dom'
import "./_header.css"
const Header = () => {
  return (
    <div className='header1' >
        <div className='top'>
            {/* <img className="monsterFoto" src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675184181/My-Porfolio/dragon_amrb2u.png" alt='logoDragon'/> */}
            
                <img  className="logo" src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1675177856/My-Porfolio/yugiohlogo_etgogs.png' alt='logoYugioh'/>
               
            
             {/* <img className='monsterFoto2' src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1675184186/My-Porfolio/kuribo_u5uew7.png' alt='logoMonster'/> */}
        </div>
        <nav>
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/Cards">Cards</NavLink>
                        <NavLink to="/Login">Logout</NavLink>
                    </ul>
                </nav>
    </div>
  )
}

export default Header