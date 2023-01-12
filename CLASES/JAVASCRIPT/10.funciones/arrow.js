// ESto se es el concepto

// const nameFunction = () => {

// }

const nameFunction = () => {
const suma = (numA, numB)
    return numA + numB
}

const sumaReturnImmp = ( numA, numB) => numA + numB

const sayMyName = name => `hola tu nombre es ${name}`
// si quires meter dos parametros hay que ponerlos en parentesis

const sumaDefaultParam = ( numA = 5, numB = 8, numC =14) => numA + numB + numC

let totalDefaultParam = sumaDefaultParam(25, 5)
console.log(totalDefaultParam)


const sumaDefaultObject = (obj) => {
    let acc = 0;
    for (const key in obj) {

        if(typeof(obj[key]) ==='number')acc += obj[key]
    }
    return acc

}



let totalObject = sumaDefaultObject({ a :25, b: 25, c:'100', d: 350})
    
console.log(totalObject)

const calAge = ( actualYear, bornYear) => {
    console.log(actualYear - bornYear)
}

const numeros = [1, 2, 3 , 4, 5  ]
const animales = ["perro", "gato" , "loro"]

const iterateList = (list) => {
    for (const item of list) {
        console.log(item);
        
    }
}

iterateList(numeros)