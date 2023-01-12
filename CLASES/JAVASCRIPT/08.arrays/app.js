// Arrays

const movies = ["batman", "Robocop", "Liberen a willy", "busqueda implacable"]


// Longitud humana 

console.log(movies.length);

// Posicion ordenador

console.log(movies[2]);

// Metodos para modificar arrays

// POP --- > Elimina el ultimo elemento del array

movies.pop ();
console.log(movies);

// push ---> Agrega el elemento al final del array

movies.push ("Spiderman");
console.log(movies)

// reverse --- Le da la vuelta

movies.reverse ();
console.log(movies)

//shift --> extrae el primer elemento de la lista

movies.shift();
console.log(movies)

//sort --> ordenar --> 

const letras = ["B", "C", "A", "H"]
console.log(letras.sort())

//const numeros = ["1", "2", "6","50", "5", "7", "3"]
//console.log(numeros.sort())

// splice --> quita desde (2 ,a 5) y agrega adicional en ese espacio

const shows = ["breaking bad", "Lost", "Mignight Mass", "24" ];
shows.splice (1,2, "los 100", "Miercoles");
console.log(shows);

//unshift --> lo mismo que push pero añadir al principio

shows.unshift("Loki");
console.log(shows);


// Metodos que no modifican el array son solo para consultar

//concat

const heroes = ["Cap. America", "hulk", "Thor"];
const villians = ["Dr. Doom", "Thanos", "Magneto"];
//console.log(heroes.concat(villains));

const characters = heroes.concat(villians);
console.log(characters) 

//Join ---> conveirte array en string
 const comida = ["galletas", "cerveza", "pipas", "pizzas"];
 console.log(comida.join(" - "));

 // en el argumento se puede colocasr " -" para separar el string

 //slice --> dejar los elementos seleccionadas --> ARGUMENTO --( DONDE EMPIEZA, DONDE ACABA )

 console.log(comida.slice(1, 3))

 // toString
 console.log(comida.toString())

 // Localizar un elemento en unarray. Te dice la posicion en el ordenador

 const numerosTwo = [ 10, 12 , 7, 5 , 6];
 console.log(numerosTwo.indexOf (7));

 // LastIndexOf ---> el -1 no lo detecta,

 console.log(numerosTwo.lastIndexOf(12))

 //Includes --- > devuelve bolean 

 console.log(numerosTwo.includes (12))

 numerosTwo.splice (numerosTwo.indexOf(12), 1);
 console.log(numerosTwo)









