

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (array , param)=> {
    const iguales = array.filter((element) => element === param);
    if (iguales == param) {
        return array.indexOf(param);
    } else {
        return 'No existe la coincidencia con el array'
    }
}
console.log(findArrayIndex(animales, 'Caracol'))