const objeto = {
    clave: "valor",
}

const batman = {
    name: "Batman",
    realName: "Bruce Wayne",
    age:70,
    city: "Gotham",
    habilities : ["detective", "millonaire"]
};

//para aceder a las claves

console.log(batman.name)
console.log(batman.habilities[0])
console.log(batman["name"])

batman.age = 80;
console.log(batman)

// for(const key in batman) {
//     console.log(key)
// }

for(const key in batman) {
    console.log(`La clave ${key} tiene valor como valor ${batman[key]}`)
}

const batmanKeys = Object.keys(batman);
console.log(batmanKeys)