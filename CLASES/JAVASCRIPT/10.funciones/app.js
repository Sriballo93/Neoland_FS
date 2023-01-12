// un fragmento de codigo re utilizable a lo largo de una aplicacion


// funciones sin parametros
// Funciones con parametros --> no hay obligatorios- con sus uso son undefined
//parametros por defecto 
// funciones que retornan valores --> funciones trasnformadoras
//funciones que no retorna valores
 //ej
// function nameFunction (name) {
//     console.log('Hola Neolanders ' + name)
// }

// nameFunction('Carla')
// nameFunction('Guada')

//ej
 
function nameFunction (name = "Rafael") {
    console.log('Hola Neolanders ' + name)
}

nameFunction('Carla')
nameFunction('Guada')
nameFunction()

function suma(a , b , c) {
    return a + b + c
}

let totalSum = suma(1,2, 5)
console.log(totalSum)

// let name;
// function transformName(name) {
//     name + ' eres un crack'
// }

// // let pablo = transforName ( "Pablo")

// let studentName = transformName ("Pablo");
// console.log(studenName)

const listNumber = [ 1, 2, 3, 4, 5, 6, 7, 2];

// retorna la lista sin duplicados
function removeDuplicates ( listNumber) {
    //0. recorrer los elemtos
    iterateListItems(listNumber)
     
        // 1. ordenr los numeros
        // 2. comarar el numero i con  i +1 - ver si son iguales
        //3. eliminar el elememto

        
     
}
// iterar elemtnos
function iterateListItems (list) {
    list.sort()
    for (const number of  list.sort()) {
        if (number == list.indexOf(number) + 1){
            list.splice(list.indexOf(number) + 1)
        }
    }

}

function compareItems(a , b) {
    if (number == list.indexOf(number) + 1) {

    }
}

function removeItem(list, position) {
    list.splice (list.indexOf(position))
}

/// otro ejemplo mas facil

function sayHello (name, language) {
    if (language == 'esp') return `Hola mi nombre es ${name}`
    return chooseLanguage(language, name)
}

console.log(sayHello('Pedro'))

function chooseLanguage (language, name) {
    let message;
    switch (language) {
        case 'esp':
            message = `Hola mi nombre es ${name}`;
            break;
        case 'ale':
            message = `Hola mi nombre en aleman ${name}`;
            break;
            case 'fra':
            message = `Hola mi nombre en frances ${name}`;
            break;
        default:
        message = `Tu nombre no tiene origen`
            break;
    }
    return message
    }



    console.log(chooseLanguage('ale', "Pedro"))

