// Mix

const superheroes = [{
    name:"Wolverine",
    type:"Mutant",
    power: 65
},
{
    name:"Hulk",
    type: "Human",
    power: 80
},

{
name:"Magneto",
type: "Mutant",
power: 78
},

 {   name:"Iron Man",
type: "Human",
power: 60
},
]


//1. Necesito generar un nuevo array de objetos  en el que "type" se transforma en "specie"

const superheroesSpecies = superheroes.map((superheroe) =>({
    name: superheroe.name,
    specie: superheroe.type,
    power: superheroe.power,
}))

console.log(superheroesSpecies);

//2. Necesito quedarme solamento los mutantes

const mutants = superheroesSpecies.filter((mutant) => mutant.specie === "Mutant");
console.log(mutants)


//3. recupera latotalidad de power de mutants..acc es acumulador siempre en reduce y normalmente se utiliza 0

const totalMutantPower = mutants.reduce((acc, mutant)=> acc + mutant.power, 0);
// console.log(totalMutantPower)
console.log(totalMutantPower / mutants.length)

//44

// const superheroesSpecies1 = superheroesSpecies.reduce((acc, heroe)=> acc + heroe.name, 0);
// console.log(superheroesSpecies1)

