import React from 'react'

const ItemList = ({character}) => {
    
    return <li key={character.id}>
                <h2>id: {character.id}</h2>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name}/>
                <h2>{character.status = "alive"}</h2>
                <h2>{character.origin.name}</h2>
            </li>
            
  
}

export default ItemList