import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav2 = () => {

  return (
    <div className='container-nav-2'>
    <img className='logo' src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1676558647/formula/f1_logo_whte6w.svg' alt='logoF1'/>
    <nav className='nav-2'>
        <ul>
            <li>
                <NavLink to="/pilots">Pilots
                </NavLink>
            </li>
            <li>
                 <NavLink to="/teams">Teams
                 </NavLink>
            </li>
            <li>
                <NavLink to="/nationalities">Nationalities
                </NavLink>
             </li>
           </ul>
    </nav>  
 </div>


  )
}

export default Nav2