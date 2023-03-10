import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!user.password || !user.username) {
      setError("Formulario Incompleto");
    } else {
      setError(null);
      console.log(user);
    }
  };
  return (
    <div>
      <h1>Formulario sin Hook</h1>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <h3>Coloca tu nombre</h3>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(ev) => setUser({ ...user, username: ev.target.value })}
        ></input>
        <h3>Coloca una contraseña</h3>
        <input
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={(ev) => setUser({ ...user, password: ev.target.value })}
        ></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error !== null && <h2>{error}</h2>}
    </div>
  );
};

export default Form;
