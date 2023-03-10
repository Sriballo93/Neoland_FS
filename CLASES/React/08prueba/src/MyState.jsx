import React, { useState } from 'react'

const MyState = () => {
    const [myName, setMyName] = useState("Sebastian Riballo");

  return (
    <div>
        <h1>{myName}</h1>
        <input 
            type="text"
            value={myName}
            onChange={(e) =>setMyName(e.target.value)}
            />
    </div>
  )
}

export default MyState;