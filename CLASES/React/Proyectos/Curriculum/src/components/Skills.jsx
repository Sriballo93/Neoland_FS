import React from 'react'
import "./Skills.css"

const Skills = ({habilities}) => {
  return (
    <div>
        <div className="habilities card">
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Skills