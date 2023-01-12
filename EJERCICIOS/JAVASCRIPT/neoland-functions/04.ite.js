// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (list) => {
    let sumaTotal =0;
     for (const number of list) {
        sumaTotal +=number
     } return sumaTotal / list.length; 
    };
        
   console.log(average (numbers))