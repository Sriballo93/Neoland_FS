 const btnName = document.querySelector('#btnName');
const input = document.querySelector('input')

//1er Ejercios Listooooooooooooo
 
  //  const getNamevalue = async() => {
  //    const  getName = await fetch("https://api.agify.io?name=michael");
  //      const json = await getName.json();
   
  //    console.log(json)

  //  }

  //  getNamevalue();


  //2er Ejercios Listooooooooooooo
   const baseUrl = 'https://api.nationalize.io';
  // const getNamevalue2 = async() => {
  //     const  getName = await fetch(`${baseUrl}?name=${input.value} `);
  //     const json = await getName.json();
  //   console.log(json) 
  // };

  // btnName.addEventListener("click", () => {
  
  
  //   input.addEventListener("input", ()=> {
  
  // });

  // getNamevalue2(input.value);
  
  
  //  }

  // );


  /////////Listooooo

 //3er ejercici0//Terminadoooooooo
//  1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

// const myBody= document.querySelector('body');

// const getNamevalue2 = async() => {
//     const  getName = await fetch(`${baseUrl}?name=${input.value} `);
//     const json = await getName.json();
//     const createp=document.createElement('p');

//     let list=[];

//      for (const infocountry of json.country) {
//     list.push(infocountry);
  
//    }

// const pContent = document.createTextNode(` El nombre de ${json.name} tiene un ${list[0].probability} de probabilidad de ser de ${list[0].country_id} y tiene una probabilidad de ${list[1].probability} de ser de ${list[1].country_id} `);
//  createp.appendChild(pContent);
//   myBody.appendChild(createp);
  

// };

// btnName.addEventListener("click", () => {

 
//   input.addEventListener("input", ()=> {

// });

// getNamevalue2(input.value);


//  }

// );


///Terminadooooooo


const myBody= document.querySelector('body');

const getNamevalue2 = async() => {
    const  getName = await fetch(`${baseUrl}?name=${input.value} `);
    const json = await getName.json();
    const createp=document.createElement('p');

    let list=[];

     for (const infocountry of json.country) {
    list.push(infocountry);
  
   }

      const pContent = document.createTextNode(` El nombre de ${json.name} tiene un ${list[0].probability} de probabilidad de ser de ${list[0].country_id} y tiene una probabilidad de ${list[1].probability} de ser de ${list[1].country_id} `);
      createp.appendChild(pContent);
      let createDelete= document.createElement('button');
      createDelete.innerHTML += ` X `;
      createp.appendChild(createDelete);
      createDelete.classList.add('deletebutton');
      myBody.appendChild(createp);
      const mydeleteButton = document.querySelector('.deletebutton');
mydeleteButton.addEventListener('click', ()=>{
  
  createp.remove();
})


};

btnName.addEventListener("click", () => {
  input.addEventListener("input", ()=> {

});
getNamevalue2(input.value);

 }

);

