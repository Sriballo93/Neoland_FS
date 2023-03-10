
import "./_pilots.css"
import useFetch from "../src/hooks/useFetch";
import { useState } from 'react';

const Pilots = () => {


const [data] = useFetch("https://63ed1a92f1ec53805dd92b89.mockapi.io/pilots");

const [filteredUsers, setFilteredUsers] = useState([]);

const filter=(keyword)=>{
  const filterData=data.filter(pilot =>pilot.fullName.toLowerCase().includes(keyword.toLowerCase()));
setFilteredUsers(filterData)
}


  return (
    <main className='pilotsMain'>
    <input className="input" type="text" onChange={(ev) => filter(ev.target.value)} />
      <div className='infoContainer'>
      
      {filteredUsers.length ? (
        filteredUsers.map((pilot) => (
          <figure className="card" key={pilot.id}>
            <figcaption>
              <h3>{pilot.fullName}</h3>
              <h3>#{pilot.number}</h3>      
            </figcaption>
                <img className="pilotFoto" src={pilot.pilotImg} alt={pilot.name}/>
                <div className="pilotInfoFotos">
                <img src={pilot.constructorImg} alt={pilot.constructor}/>
                <img src={pilot.countryImg} alt="country"/>
               </div>
          </figure>
        ))
      ) : (
        <h3>No hay pilotos que coincidan con la busqueda</h3>
      )}
          {/* {data && data.map((item) => <h2 key={item.id}> {item.fullName}</h2>)} */}
      </div>
      <img className='heropilots' src='https://res.cloudinary.com/dg2xjawnt/image/upload/v1676560942/formula/image_s7gnfw.jpg' alt='enfrentamiento'/>
    </main>
  )
}

export default Pilots