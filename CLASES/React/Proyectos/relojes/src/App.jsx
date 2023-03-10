
import './App.css'
import Countdown from './components/Countdown'
import DigitalClock from './components/DigitalClock'
import Stopwatch from './components/Stopwatch'

const App=()=> {
 

  return (
    <div className="App">
        <DigitalClock/>
        <Countdown/>
        <Stopwatch/>
    </div>
  )
}

export default App
