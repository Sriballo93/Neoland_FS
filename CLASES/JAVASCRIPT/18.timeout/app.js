setTimeout(()=> {
    console.log("Hola, tengo tres segundos de retraso"); 
}, 3000)

// setInterval(() => {
//     console.log("Ha pasado un segundo");
// }, 1000);

let intervalID;
let segundos = 0;

const printSeconds = () => {
    segundos++;
    console.log(`Han pasado ${segundos} segundos.`);
    if (segundos > 5) {
        clearInterval(intervalID);
    }
};

const creaOneSecondInterval = () => {
    intervalID = set_Interval ( printSecond,3000)
}

