
import "./App.css";
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import More from "./components/More"
import { CV } from "./data/data.js";
import { useState } from "react";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Volunteer from "./components/Volunteer";


const App=()=> {
const { hero, education, experience, languages, habilities, volunteer } = CV;
const [showEducation, setShowEducation]= useState(true)

  return (
    <div className="App">
         <Hero hero={hero} />
        <About hero={hero} />
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
	      <More>
        <Languages languages={languages}/>
        <Skills habilities={habilities}/>
        <Volunteer volunteer={volunteer}/>
	      </More>
    </div>
  )
}

export default App
