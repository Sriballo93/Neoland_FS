import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { useContext } from 'react'
const Nav1 = () => {
    const { user } = useContext(UserContext);
  return (
    <div className='container-nav-1'>
    <img className="fia" src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1676558628/formula/fia_logo_c893su.png' alt='logofia'/>
    <nav className='nav-1'>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {!user &&  <button className='other'>
                    <NavLink to="/login">Sign in
                    </NavLink>
                </button> }
            </li>
            <li>
                {user &&<button className='redone'>
                     <NavLink onClick={()=>logout()}>Log out
                    </NavLink> 
                </button> }
             </li>
           </ul>
     </nav>
</div>
  )
}

export default Nav1