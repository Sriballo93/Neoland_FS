import './Login.css';

const Login = () => {
  return (
    <main className="main-input">
      <form className="cm-input">
        <h1>LOG IN AND SUBSCRIBE</h1>
        <h3>Email address</h3>
        <input type="text" />
        <h3>Password</h3>
        <button>LOGIN</button>
      </form>
    </main>
  );
};

export default Login;
