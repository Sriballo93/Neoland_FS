import React from 'react'
import "./_login.css"
const Login = () => {
  return (
    <main>
      <div className='register'>
        <div>
          <h1>Login</h1>
          <input type="text" placeholder='Put your Name'/>
          <button>Submit</button>
        </div>
        <img className='yugiFoto' src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1676470519/My-Porfolio/8990845_liev74.png' alt="fotoYugi"/>
      </div>
    </main>
  )
}

export default Login