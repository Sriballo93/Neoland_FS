const name = "Peter";
const surname= "Parker"
const quote = `Hola, mi nombre es ${name} ${surname}`;
console.log(quote)

// sirve para hacer un template literal en html

// const myHtml = `
// <div>
//     <ul>
//         <li>${Primero}</li>   
//     </ul>
// </div>
// `

///////////////

//Destructuring

const movie = {
    title: "Tenet",
    director : "Christofer Nolan",
    year : 2020,
    actors : {
        mainCharacter: "Nose Washinton",
        secondaryCharacter : "Robert patison",
    },
}
 // Esto ya no 
// const title = movie.title;
// const year = movie ["year"];
// console.log(title);
// console.log(year)

// const {title, director, year} = movie;
// const {mainCharacter}= actors;
// console.log(mainCharacter);

// spread operator

const heroes = ["Luke", "Leia", "Han Solo"];
const villains = ["Palpatine", "Darth vader", "Moff Tarkin"];
const characters = [...heroes, ...villains ,"chewie"]
console.log(characters)


// map 

const numbers = [1, 2, 3, 4, 5, 6]
const doubleNumbers = numbers.map ((number) => number * 2);
console.log(doubleNumbers)

const humans = ["😂","😂","😂","😂","😂"]
const zombies = humans.map((human) =>"🧟‍♀️");
console.log(zombies)

const movies = [
    {
        title:"The batman",
        yearss: 2022
    },
    {
        title:"Dune",
        yearss:2021
    },
    {
        title:"gremlins",
        yearss:1985
    }
];

const moviesTitles = movies.map((movie) =>movie.title);
console.log(moviesTitles)

const mappedMovies = movies.map ((movie) =>({
    titulo: movie.title,
    yearsss: movie.yearss,
}))
console.log(mappedMovies)

// Uno de las faciles para realizar un buscador 

const ESDLAcharacters = [{
    name:"Frodo",
    species: "hobbit"
},
{name:"Sam",
species: "hobbit"},
{name: "Legolas",
species:"Elve",
}
]

const hobbits = ESDLAcharacters.filter((character) => character.species === "hobbit");
console.log(hobbits)


const colors = ["red", "blue", "bLack", "white", "green", "yellow"];
const onlyLWord = colors.filter((color)=>color.toLowerCase().includes("l"));
console.log(onlyLWord)


/// Find -- > se va a encontrar el primero ( dnis , matriculas)
const sam= ESDLAcharacters.find((character)=> character.name ==="Sam");
console.log(sam)


// reduce -- sirve para reducir cosas en una misma
//no me sirvio muy bien
// const charactersAges = ESDLAcharacters.reduce((acumulador, character)=> 
// acumulador + character.age, 0);
// console.log(charactersAges)

// Every  y some 

