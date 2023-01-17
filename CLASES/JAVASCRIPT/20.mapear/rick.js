const data = require("./characters.json");
const dataTwo = require("./app.json")
const characters = data.results;

const rickCharacters = () => {
    return characters.filter((rickCharacters) => rickCharacters.name.toLowerCase.includes("Rick"));
    ricks = 
}

const ricks = rickCharacters();


// find te va  dar solo el primero .. si buscas algo y lo encunetras dejas de buscar

// ,ej

 const aliveCharacter = ( ) => {

    return characters.filter((characters) => characters.status === "Alive");
};

// clg (aliveCharacters()); te saldran todos los vivos 


// una funcion que recba como param el status del personaje ("alive", "dead" o "unknow"

const checkCharacterStatus = (status) => {
    if (status==="Alive"|| status ==="Death"||status==="unknow") {
        return characters.filter((character) => character.status === status)
    } else {
        return "El status solo puede ser 'Alive','Death' y 'unknown'" 
    }

    
    
    
}

console.log(checkCharacterStatus("Malandro"))


// 

const filterAnyCharacter = (name, list) => {
   const res = list.filter((character) => character.name.toLowerCase().includes(name.toLowerCase));
    
}

console.log(filterAnyCharacter("Rick",characters ))
onsole.log(filterAnyCharacter("Rick",charactersPageTwo ))