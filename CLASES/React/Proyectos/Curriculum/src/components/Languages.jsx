import React from 'react'
import "./Languages.css"


const Languages = ({languages}) => {
  return (
    
        <div className="languages card">
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.language}</p>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}
      </div>
    
  )
}

export default Languages