// suma

const list = ["Gato", 4 , 70, "Galleta", "Mesa", 2];

let numbCount = 0; 
let stringCount = 0;
for (const item of list) {
    if (typeof item==="string") {
        stringCount += item.length;
    } else if (typeof item === "number") {
        numbCount += item; // sumar los elementos no incluir elementos
    }
}

console.log(stringCount)// 15
console.log(numbCount)

///PErfect