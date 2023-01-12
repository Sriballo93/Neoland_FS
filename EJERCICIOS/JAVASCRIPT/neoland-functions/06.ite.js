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

  const numeros = [1, 2, 2, 3, 4, 4, 5];

const unicos = numeros.filter((valor, indice) => {
    return numeros.indexOf(valor) === indice;
  }
);

console.log(unicos); // [1, 2, 3, 4, 5]