import { useState } from "react";

import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  const handleInput = (ev) => setText(ev.target.value);

  return (
    <div className="App">
      <img
        data-testid="giphy"
        src="https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif"
        alt="giphy"
      />
      <img
        src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676882913/crytos/current-bitcoin-logo_gv6kyb.webp"
        alt="bitcoin"
      />
      <img
        src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1676882913/crytos/current-bitcoin-logo_gv6kyb.webp"
        alt="coin"
      />
      <div>
        <input onChange={handleInput} placeholder="Type your name!" />
        <h1>Hello, {text}</h1>
      </div>
    </div>
  );
};

export default App;
