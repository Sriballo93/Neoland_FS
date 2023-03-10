import React from 'react'
import "./More.css"
import Languages from "./Languages";
import Skills from './Skills';
import Volunteer from"./Volunteer"



const More = ({children}) => {
  return (
    <div className='more'>
    {children}
    </div>
  )
}

export default More