//Bucles

//Sirven para recorrer objetos y arrays recorribles. Iteracion de algo iterable

const xmen = ["Wolverine", "storm", "Cyclops", "Rogue", "Beast"];

for ( let index = 1; index < xmen.length; index++) {
    const characters = xmen [index]
console.log(characters, index);
}

const family = ["Miercoles", "Cosa", "Morticia", "Fetido", "Gomez"];
const addamsFamily = [];


for ( let i = 0; i < family.length; i++) {
    const member = family [i]+ " Addams";
    console.log(member)
    addamsFamily.push(member);

}

console.log(addamsFamily);


for ( let i = 1 ; i <= 10 ; i++) {
if ( i > 5) {
    console.log("Soy menor que 5");
}
else if ( i >= 5 && i < 10) {
    console.log("Soy mayor o igual que 5 y menor que 10")
} else {
    console.log("Soy un 10");
}
}
let i =  1;

const paises = ["Inglaterra", "China", "Francia", "España"]
// of --> buvle mas rapido pero no te da el indice
for ( const pais of paises) {
    console.log(pais);
}

//forEach --> si te da indese

paises.forEach ((pais, i) => {
    console.log(pais, i);
});

const movie = {
    title: "Dune",
    year: 2021,
    director: "Denis Villenueve",
}
// for in
for (const key in movie) {
    console.log(`La clave ${key} tiene como valor : ${movie[key]}`);
}


///////////////////

