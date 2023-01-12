// OPeradores logicos

const tengoCarnet = true;
const tengoCoche = false;


// Y - &&
const puedoConducir = tengoCarnet && tengoCoche
//console.log(puedoConducir);


// O - ||

const puedoConducirOr = tengoCarnet || tengoCoche;
//console.log(puedoConducirOr)

// Operadores de comparacion

// Igual que ( El igual que no contempla el tipo de dato)
const numA = 2;
const res = numA === "2"
console.log(res)
 
// Estrictamente igual ( contempla el tipo de dato)

const resTwo = numA === 2;
console.log(resTwo)

// No - !

const notrue = !true
const notfalse = !false

// Diferente que

 const resThree= numA != "3";
 console.log(resThree)

 //EStrictamente diferente 
 const resFour= numA !== "3";
 console.log(resFour)

 // Ejemplo no 

 const noPuedoConducir = !tengoCarnet || !tengoCoche;
 console.log(noPuedoConducir)

 //Mayor que
 const resFive = numA > 2;
 console.log(resFive);

 //Mayor o igual que

 const resSix = numA >= 2;
 console.log(resSix);

 // Menor que 
 const resEven = numA < 2;
 console.log(resEven)

 // Menor o igual que
 const resEight = numA <= 2;
 console.log(resEight)
 

