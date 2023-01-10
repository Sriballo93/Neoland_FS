//Metodos de Strings

// Acceder a una posicion en un string 

const palabra  = "Silla";
console.log(palabra[2]);
console.log(palabra.length)

// length --> Go to hell 

// Includes 
console.log(palabra.includes("i"))

const frase = " Hassta el infinito y mas alla";
console.log(frase.includes("infinito"))

//Repeat

const saludo = "Hola";
console.log(saludo.repeat(3));

//Replace 
const movie = "Star trek";
console.log(movie.replace("trek" , "wars"))

//ReplaceAll
const fraseTwo = "Buenos dias, buenas tardes y buenas noches";
console.log(fraseTwo.replaceAll ("buenas", "malas")); 

// windows + . = emogis 

//Slice --> ( donde empieza a cortar y hasta donde termina de cortar)
const album = "Bootcamp";
console.log(album.slice(0, 4));

//split

const movieTwo = "Star Wars the phantom menace";
const movieTwoSplit = movieTwo.split(" ")
//const movieTwoSplit = movieTwo.split(" ", 2(es el numero de palabras que quieres que apareczca)) ---> "stars", "wars"
console.log(movieTwoSplit)

//ej 2

const link = "https://www.amazon.es/ref=nav_logo";
const newlink = link.split ("nav");
const splittedLink = newlink[0];

console.log(splittedLink)

// toUpperCase 

const uppercase = "estoy en mayuscula";
console.log(uppercase.toUpperCase())

//toLowerCase

const lowercase = "ESTOY EN MINUSCULAS"
console.log(lowercase.toLowerCase())

//Trim - recortar(espacios) para evitar problemas en bases de datos .

const toTrim = "    Hola que tal   ";
console.log(toTrim.trim());







