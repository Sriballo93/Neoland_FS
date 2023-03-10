import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { planets }  from '../data/data';
import "./Planets.css"

const Planets = () => {
  // const PlanetURL="https://api.le-systeme-solaire.net/rest.php/bodies";

  return (
    <div className='planetsContainer'>
      <h1>Solar System Planets</h1>
      <div className='planets'>
          {planets.map(planet => (
            <figure key={planet.planetName}>
            <Link to={`/planets/${planet.planetName}`}>
              <img src={planet.img} alt={planet.planetName}/>
              </Link>
              <h3>{planet.planetName}</h3>
            </figure>
          ))}
      </div>
    </div>
  )
}

export default Planets