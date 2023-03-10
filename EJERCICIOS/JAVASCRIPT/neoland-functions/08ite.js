// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code', //4
    'repeat', //1
    'eat', //1
    'sleep',//2
    'code',
    'enjoy',//2
    'sleep',
    'code',
    'enjoy',
    'upgrade',//1
    'code'
  ];

const results = counterWords.reduce((counter, word)=>((counter[word] = counter[word] + 1 ||1), counter),{})

console.log(results)