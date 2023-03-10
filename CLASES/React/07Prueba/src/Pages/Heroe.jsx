import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroe } from '../data/data';
import HeroeDetails from './HeroeDetails';
import { deleteHeroe } from '../data/data';

const Heroe = ({  }) => {
  const params= useParams();
  const navigate= useNavigate();
  const heroe=getHeroe(params.id);

  if (!heroe) return <p>Noexiste el heroe que buscas </p>
  return (
   <div>
      <h1>My heroes</h1>
      <HeroeDetails heroe={heroe}/>
      <button onClick={() =>{
        deleteHeroe(heroe.id).then(()=>{
          navigate('/heroes');
        });
      }}
      >Borrar a {heroe.name}</button>
   </div>
  )
}

export default Heroe;