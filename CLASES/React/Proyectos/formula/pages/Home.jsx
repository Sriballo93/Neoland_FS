import React from 'react'
import "./_home.css"
const Home = () => {
  return (
    <main>
      <video className="video" playsInline autoPlay muted loop>
        <source src="https://res.cloudinary.com/dg2xjawnt/video/upload/v1676573394/formula/New_2022_F1_Opening_Titles_720p_fp8ebi.mp4" type="video/mp4"/> 
        </video>
        <h1>Welcome to Fan Page</h1>
        <p>
        El Campeonato Mundial de Fórmula 1 de la FIA, más conocida como Fórmula Uno, Fórmula 1 o F1, es la máxima competición de automovilismo internacional y campeonato de deportes de motor más popular y prestigioso del mundo. La entidad que la dirige es la Federación Internacional del Automóvil (FIA). Desde septiembre del 2016, la empresa estadounidense Liberty Media, a través de la adquisición del Formula One Group, es responsable actualmente de gestionar y operar el campeonato. 
        </p>
    </main>
  )
}

export default Home;