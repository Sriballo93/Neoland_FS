// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

let nombre= "fhgff";

 
 function buscadorPersonas(array,nombre ) {
    let posicion = 0;
    // primero vemos si el valor name esta dentro del array
    if (array.includes(nombre)) {
        // si existe lo que queremos es recorrer el array hasta que encontremos la posicion en la que este el nombre por eso le ponemos la condicion de nombre = posicion array 
        for (let i = 0; i < array.length; i++) {
            if (nombre == array[i]) {
                // una vez que sabemos donde esta guardamos la posicion y es lo que retornamos
                posicion = i;
                //console.log(posicion);
                return `Es ${array.includes(nombre)} y la posicion es ${posicion} `;
            }
            
        }

       // console.log(array.includes(nombre));
        // con esto ya sabemos que mark esta dentro del array

    } else{
        return ` Es ${false} y no tiene asignada una posicion`;
    }
  }
//  let finalll = buscadorPersonas(nameFinder, nombre)
//  console.log(`el nombre es ${name} y esta en la posicion ${finalll}`)
 

console.log(buscadorPersonas(nameFinder, "Ricardo"))