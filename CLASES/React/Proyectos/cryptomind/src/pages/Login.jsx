import './Login.css';

import React, { useContext, useRef } from 'react';

import { UserContext } from '../context/userContext';

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(UserContext);

  return (
    <main className="main-input">
      <div className="cm-input">
        <h1>LOG IN AND SUBSCRIBE</h1>
        <h3>Email address</h3>
        <input type="text" ref={inputRef} />
        <button onClick={() => login(inputRef.current.value)}>LOGIN</button>
      </div>
    </main>
  );
};

export default Login;
