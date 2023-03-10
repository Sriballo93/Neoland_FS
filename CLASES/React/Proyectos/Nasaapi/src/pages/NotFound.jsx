import React from 'react'
import "./_notfound.css"
import logo from "../assets/icons/404.gif"
const NotFound = () => {
  return (
    <div className='notfound'>
    <h1>We are sorry! Look for another search</h1>
    <img src={logo} alt='404error'/>
    </div>
  )
}

export default NotFound