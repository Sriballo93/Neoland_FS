// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

const removeDuplicates = duplicates.filter((valor, indice) => {
    return duplicates.indexOf(valor) === indice;
  }
);


// console.log(removeDuplicates);


/// Buscar otra manera mas facil con lo que ya hemos visto 

const unicos = [];

duplicates.forEach( (elemento) => {
  if (!unicos.includes(elemento)) {
    unicos.push(elemento);
  }
});

console.log(unicos);


