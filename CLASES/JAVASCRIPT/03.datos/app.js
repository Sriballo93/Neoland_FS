// Tipos

//String

const texto = "Hola, buenas tardes";

const textoSimple = 'Hola, buenas noches';
const textoCombinado = "Me han dicho 'buenas noches'"
const url = "wwww.google.com";


//Numbers
const numero = 12;
const decimales= 0.12313;

// boleeans
const isDeveloper = true;
const noDev= false;

//Null 
const empty = null;

//Undefined 
let car
//console.log(car)

// Object - objeto 

const superheroe = {
    name: "Spiderman",
    realName: "Peterparker",
    location: "New York",
    age: 23,
}
//console.log(superheroe.name)

superheroe.name= "Spider-Man";
//console.log(superheroe.name)

//Array

const superheroes = ["hulk", "Black Panther", "Batman", "Spiderman"]

// Combinar datos 

const movies = [
    {   title:"The batman",
    year: 2022},
    {   title:"Dune",
    year:2021},
    {   title:"Avatar",
    year:2000}
]

//console.log(movies)

//Concatenar datos

const name = "Peter";
const surName = "PArker";
const age = 35

const quote = "Hola, me llamo " + name + " " + surName + " y tengo " + age + " años."
//console.log(quote)

//Con ES6
const newQuote = `Hola, me llamo ${name} ${surName} , y tengo ${age} años. `;
console.log(newQuote) 



