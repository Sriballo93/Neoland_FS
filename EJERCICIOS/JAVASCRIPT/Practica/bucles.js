// recorrer un array
const alumnos = ["Marta", "Carlos", "kareen", "Sebas", "christian"]
/*

for (let index = 0; index < alumnos.length; index++) {
    const alumno = alumnos[index];
    console.log(alumno) // todos los alumnos que pasa si en clg pasamos (alumno, i) nos saca la posicion
}
*/

for (const alumno of alumnos) {
    console.log(alumno) // Sale lo mismo que el bucle anterior  pero mas corto
}

alumnos.forEach((alumno, i)=> console.log(alumno, i))// seria los mismo del for pero con indince y mas corto 


// Objetos ç

const city = {
    name:"Paris",
    country:"France",
    population:33477348534,
    region: "Europa",
    alumnos: ["Louis","Antoine", "Juliette"]

}

//Ej 1

for (const iterator in city) {
    console.log(city[iterator]) // MEda los valores 
        
    }


    console.log(city["name"]) // me da paris

// Ej 2.

for (const iterator in city) { // 5 vueltas
    for (const alumno of city.alumnos) {//3 vueltas
        console.log(alumno)
    }
        
    }


    console.log(city["name"]) // me da paris



const objeto = [
    {}
    

]


