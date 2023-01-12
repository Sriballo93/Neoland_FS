const list = [ 1, 2,3, 4, 5]

for (const item of list) {
    console.log(item);
    
}

const viewItem = () => {
    for (const item of list) {
        console.log(item);
    }
    const x = 10;
    //Aqui si puedo leer x porque estoy en el mismo scope
    console.log(x);
}

// console.log(x); // no se puede ver

console.log(list); 