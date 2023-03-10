import Array from '../components/Array'; 

import Time from '../components/Time'
import './App.css'
import { useState } from 'react';

const App = () =>{
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
    <button onClick={() => setLoaded(true)}>Load</button>
    {loaded ? (
        <div>
          <h3>True</h3>
        </div>
      ) : (
        <h3>False</h3>
      )}
        <Time />
        <Array />
    </div>
  )
}

export default App
