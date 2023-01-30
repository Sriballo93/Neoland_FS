// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

 const contentApp = document.querySelector("body");
 //contentApp .innerHTML = `<div></div>`;
let nuevoDiv= document.createElement('div');
document.body.appendChild(nuevoDiv);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// contentApp.innerHTML += ` <div><p></p></div> `

let nuevoDiv2= document.createElement('div');
let nuevaP= document.createElement('p')

document.body.appendChild(nuevoDiv2).appendChild(nuevaP);




// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.


//con Templates String
// contentApp.innerHTML += `<div class="pS"></div>`
// const masPs = document.querySelector(".pS")
// const pNecesarias = 6;

// for (let index = 0; index < pNecesarias; index++) {
    
//     if (index < pNecesarias) {
//         masPs.innerHTML += `<p></p>`
        
//     }
    
// }
 
let div = document.createElement('div');
 
for (let i = 0; i < 6; i++) {
    let p = document.createElement("p");
    div.appendChild(p);

}

document.body.appendChild(div)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let pconText = document.createTextNode('Soy dinamico');
let p1 = document.createElement('p')
p1.appendChild(pconText);
document.body.appendChild(p1);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// let wubbaText= document.createTextNode('Wubba Lubba dub dub');
// document.body.h2.appendChild

const contentApp2 = document.querySelector(".fn-insert-here");
contentApp2.innerHTML += `'Wubba Lubba dub dub'`;



// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
 const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


contentApp.innerHTML += `<ul></ul>`
const myUl = document.querySelector("ul");

for (let i = 0 ; i < apps.length; i++) {
if (i < apps.length) {
    myUl.innerHTML += `<li>${apps[i]}</li>`;
}
        
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me


const myRemoves = document.getElementsByClassName("fn-remove-me");

for (const iterator of myRemoves) {
    iterator.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// let createP = document.createElement('p');
// let ptext = document.createTextNode('')
// createP.classList.add('medio');


const mypclass = document.querySelector("div");
mypclass.insertAdjacentHTML("afterend","<p>Voy en medio</p>")

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
// ```
 let myDivs = document.querySelectorAll('div.fn-insert-here');
//   let nuevap= document.createElement(`p`);
//   let textoP= document.createTextNode('Voy dentro!');
//  nuevap.appendChild(textoP);

 

    
    for (let i = 0 ; i < myDivs.length; i++) {
        
            myDivs[i].innerHTML += `<p>Voy dentro!</p>`;
        
                
        }
  



