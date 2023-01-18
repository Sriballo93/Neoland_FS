//Funciones

//1.comprar ingredientes Huevo, aceite , sal
//2 . calentar el aceite
// Echar el huevo 
// Servir el Huevo


1
const huevoDeDinosaurio = "🥚";
const aceiteDeGirasol = "🍼";
const salDelHimalaya = "🧂";
const hacerUnHuevoFrito = (
    ingredienteHuevo,
    ingredienteAceite,
    ingredienteSal) => {
        console.log(`Tenemos como ingredientes: ${ingredienteHuevo},${ingredienteAceite}y ${ingredienteSal} `)
        calentarElAceite(ingredienteAceite, ingredienteHuevo,ingredienteSal)
    };

    const calentarElAceite =(ingredienteAceite,ingredienteHuevo,ingredienteSal) => {
        console.log(`Calentando el ${ingredienteAceite}`);
        freirHuevoySalarlo(ingredienteHuevo, ingredienteSal)
    }


    const freirHuevoySalarlo = (ingredienteHuevo, ingredienteSal) => {
        console.log(`Acabamos de echar el ${ingredienteHuevo} y le ponemos un poquito de sal` );
        servirHuevoFrito();
    }

    const servirHuevoFrito = () => {
        console.log(`Ha comer 🍳`)
    }

hacerUnHuevoFrito(huevoDeDinosaurio, aceiteDeGirasol, salDelHimalaya);