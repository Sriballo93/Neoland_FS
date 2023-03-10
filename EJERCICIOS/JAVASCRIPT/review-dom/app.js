// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const mybody = document.querySelector('body')
let createmyUl =document.createElement('ul');
mybody.appendChild(createmyUl);
// const myUl =document.querySelector('ul');
// console.log(myUl)

for (const country of countries) {
    let createli= document.createElement("li");
    let create_Country = document.createTextNode(country);
    createli.appendChild(create_Country);
    createmyUl.appendChild(createli);
}



// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const myremove =document.querySelector(".fn-remove-me");
myremove.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const mydata_function= document.querySelector('div[data-function]')
//([data-function='printhere'])

let createmyUl1 =document.createElement('ul');
mydata_function.appendChild(createmyUl1);

for (const car of cars) {
    let createli= document.createElement("li");
    let create_Car = document.createTextNode(car);
    createli.appendChild(create_Car);
    createmyUl1.appendChild(createli);
}
// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const photos = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const createUl3 = document.createElement('ul');
mybody.appendChild(createUl3);



for (const photo of photos) {
    const createDiv= document.createElement('div');
    const createH4=document.createElement('h4');
    const createTitle=document.createTextNode(photo.title);
    createH4.appendChild(createTitle);
    createDiv.appendChild(createH4);
    // createImg=document.createElement(`img ${src=photo.imgUrl}''${alt=photo.title}`);
     createDiv.innerHTML += `<img src='${photo.imgUrl}'alt='${photo.title}'/>`;
     //
    createUl3.appendChild(createDiv);
    createBtn2=document.createElement('button');
    createBtn2.innerHTML= `X`;
    createDiv.appendChild(createBtn2);
    createBtn2.addEventListener("click", () => {   
        createDiv.remove(photo);
    },
    )
    
    // console.log(createDiv)
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
createUl3.classList.add('divslist');
const deletebtn= document.createElement('button');
deletebtn.classList.add('remove');
mybody.appendChild(deletebtn);
const listofDivs = document.querySelector('.divslist');


function deleteLastItem() {
    listofDivs.removeChild(listofDivs.lastChild);    
  }
 
deletebtn.addEventListener("click", () => {   
    deleteLastItem();
},
)

// se puede localizar el ultimo utilizando array.lenght -1
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.


