// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

// Puedes usar este array para probar tu función:



/*function sumAll(numbers) {
    for (const item of numbers) {
        
    }

 
}*/
const numbers = [1, 2, 3, 5, 45, 37, 58];
const sumAll = (list) => {
    let addNumbers = 0 
    for (const number of list) {
        addNumbers += number
    } return addNumbers;
};
console.log(sumAll(numbers))