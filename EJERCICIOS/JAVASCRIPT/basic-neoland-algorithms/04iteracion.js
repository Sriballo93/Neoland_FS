
// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers.splice(0, 1, "Ironman");
console.log(avengers)

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length)

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.unshift("Morty","Summer");
console.log(rickAndMortyCharacters[4])

// //TODAVIA NO
// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[3])

// Preguntar si se puede ahorra codigo
// // TODAVIA NO
// 1.6 Elimina el segundo elemento del array y muestra el array por consola.

rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)


// Creo que a finalizado
