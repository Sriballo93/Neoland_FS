const valid = true;

//Son lo mismo
//if(valid === true)
//if(valid);


// ESto se ejecuta porque valid es true , no estamos comprobando el balor , si no la existencia de valid
if(valid) {
    console.log(("valid es true"));
} 
const superheore = "Batman"

if (superheore === "Batman"){
    console.log("Hola soy Batman")
}else { console.log("No soy batman")}


if (superheore === "Batman" && typeof superheroe === "string"){
    console.log("Hola soy Batman")
}else { console.log("No soy batman")}

const age = 130;
if (age >= 18 && age <100) {
    console.log("Eres adulto")
} else if (age > 0 && age < 18 ) { console.log("Eres adolescente");
} else if(age > 100 && age < 120 ) { console.log("Eres muy mayor");
} else {console.log("Eres inmortal o no has nacido")}

// else

// Switch ( para calculadora)


/*switch (superheroe) {
    case "spiderman":{ clg ( "Su nombre es PEter PArker ")}
    break;
    case : "DAredevir: clg ( "Su nombre real es MAt mudrocj
    default:
        clg("no hay superheriore"); 
        break;

    
}*/

// Ternario
const user = "pepe";
let logged ;
// condicion ? se cumple  : no se cumple
user ? ( logged = "Estoy logueado") : ( logged = "No estoy logueado");
console.log(logged)

// si no le das valor a user es no estoy logueado 


