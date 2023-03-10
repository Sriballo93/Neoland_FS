import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getHeroes } from '../data/data';
import HeroeDetails from './HeroeDetails';

const Heroes = () => {
  
  const  heroes = getHeroes();
  return (
    <div>
        <div>
            <h1>All Heroes</h1>
            <ul>
              {heroes.map((heroe)=>(
                <li key={heroe.id}>
                  <Link to={`/heroe/${heroe.id}`}>
                    <HeroeDetails heroe={heroe}/>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
        <Outlet />
    </div>
  )
}

export default Heroes;