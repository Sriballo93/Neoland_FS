const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

// const swap = (array,1,index2) => {
//     const player1 = array[index1];
//     const player2 = array[index2];
//     array[index1] = player2;
//     array[index2] = player1;
//     return array;
// }

// console.log(swap(players, 1, 4))

const swap = (array, playera, playerb) => {
    const textA = array[playera];
    const textB = array[playerb];
    array[playera] = textB;
    array[playerb] = textA;
    return array;
}
console.log(swap(players, 3, 1));