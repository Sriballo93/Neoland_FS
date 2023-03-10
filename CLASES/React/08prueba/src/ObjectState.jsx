import React from 'react'
import { useState } from 'react';

const ObjectState = () => {
const [avengerInfo, setAvengerInfo] = useState({
    name:"Thor",
    lastName:"Odinson",
});

  return (
    <div>
        <h4>
            {avengerInfo.name} | {avengerInfo.lastName}
        </h4>
        
        <input 
        type="text"
        value={avengerInfo.name}
        onChange={(e) => setAvengerInfo({
            ...avengerInfo,
            name:e.target.value,
        })}
        />
            <input 
        type="text"
        value={avengerInfo.lastName}
        onChange={(e) => setAvengerInfo({
            ...avengerInfo,
            lastName:e.target.value,
        })}
        />
    </div>
    
  )
}

export default ObjectState;