import React, { useContext, useRef } from 'react'
import { UserContext } from '../src/context/userContext';
import "./_login.css"
const Login = () => {

  const inputRef= useRef(null);
  const {login} = useContext(UserContext);

  return (
    <main className='mainLogin'>
      <div className='loginContainer'>
        <h1>
          SIGN IN
        </h1>
        <br/>
        <span>Email address</span>
        <input type="text" ref={inputRef}/>
        <button onClick={()=>login(inputRef.current.value)}>SIGN IN</button>
      </div>
      <img className='carrera' src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1676574729/formula/hero2_jjsofl.jpg' alt='carrerafoto'/>
    </main>
  )
}

export default Login