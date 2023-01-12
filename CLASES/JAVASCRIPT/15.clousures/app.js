const principal = () => {
    const x = "Paco";
// la funcion principal va a definir la funcion sub
    const sub =(y) => {
        console.log(x, y);
    };

    //retorna la funcion sub
    return sub 
}

//y esto que viene es clousure ya que en los genes de  principal estan hijoIndeoendiente por lo que obtiene las contantes y funciones de sub y x y 
const hijoIndependiente = principal();
hijoIndependiente("Heredia")



// const saludo = () => {
//     const name = "hola";
//     return name;
// };

// const saludoIde