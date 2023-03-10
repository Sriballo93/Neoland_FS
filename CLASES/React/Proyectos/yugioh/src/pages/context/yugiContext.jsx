import React, { createContext, useState, useEffect } from 'react'

export const YugiContext = createContext();

  export  const YugiContextProvider = ({children}) =>{

    const [cards, setCards] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
  

return (
  <YugiContext.Provider value = {{cards, setCards, loaded}}>
    {children}
  </YugiContext.Provider>
)

  };
  
