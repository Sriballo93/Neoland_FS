import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { planets } from "../data/data";
import "../index.css"
import "./_pdetails.css"

const PlanetsDetail = () => {

const {planetName} = useParams();
const [planet, setPlanet] = useState()
const filteredImg= planets.filter(p => p.planetName == planetName);
console.log(filteredImg[0].img)

// const [planetImg, setPlanetImg] = useState("null")

const getPlanet = async ()=>{
    
    const res = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${planetName}`);
    const data = await res.json();
    console.log(data)
    setPlanet(({
      name: data.englishName,
        type:data.bodyType,
        moons:data.moons,
        temp:data.avgTemp,
        density:data.density,
        massValue:data.massValue,
        volValue:data.volValue,
        gravity:data.gravity,
        

   }))

 }
 useEffect(() => {
    getPlanet()
 
   
 }, [])
 

 
  return (
        <div className="infoPlanet">
        <article>
        <h1>{planet?.name}</h1>
        <h4>{planet?.type}</h4>
        <h4>Gravity:  {planet?.gravity}</h4>
        <h4>Density:  {planet?.density}</h4>
        <h4>Avg Temperature:  {planet?.temp}</h4>
      </article>
         <img src={filteredImg[0].img} alt={planetName}/>
      </div>
  );
};

export default PlanetsDetail;
