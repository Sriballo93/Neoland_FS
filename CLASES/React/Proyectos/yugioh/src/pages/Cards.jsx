import React, {useContext, useEffect, useState } from 'react'
import { YugiContext } from './context/yugiContext'
import "./_cards.css"


const Cards = () => {

  const {cards, setCards, loaded} = useContext(YugiContext);
  
  const getCards= async ()=>{
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date");

    const data= await res.json();
      setCards(data.data);
      
  };

const [types, setTypes] = useState(() => {
console.log(cards)
})



const filterCard= (type)=>{
setTypes(cards.filter(card => card.type === type));

}

useEffect(()=>{
  getCards();
  filterCard();
},[]);

  return (
    <main className="mainCards">
    <div className="cardsContainer">
    <nav>
      <ul>
        <button onClick={()=>filterCard("Normal Monster")}>Monster</button>
        <button onClick={()=>filterCard("Spell Card")}>Spell</button>
        <button onClick={()=>filterCard("Trap Card")}>Trap</button>
      </ul>
    </nav>
    <div className='layout-Cards'>
    
      {types?.map((type) => (
          <figure key={type.id} >
            <img className="card" src={type.card_images[0].image_url} alt={type.name}/>
          </figure>
        ))
      }
      </div>
      </div>
    </main>
  );
};

export default Cards;