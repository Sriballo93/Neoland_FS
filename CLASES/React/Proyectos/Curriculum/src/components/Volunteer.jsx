import React from 'react'
import "./Volunteer.css"

const Volunteer = ({volunteer}) => {
  return (
  
          <div className="volunteer card">
              <p>{volunteer.name}</p>
              <p>{volunteer.where}</p>
              <p>{volunteer.description}</p>
            </div>
        
  )
}

export default Volunteer