// 2.1 Gestiona la siguiente promesa para esperar a ejecutar el console usando 
// async-await.

const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 4000);
    })

    await promise;
    console.log('Time out!');
};

runTimeOut();

  

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(characters => console.log(characters));
//  }

//  getCharacters();


 const getCharacters= async ()=> {
    const  getName = await fetch(`https://rickandmortyapi.com/api/character`);
    const json = await getName.json();
  console.log(json.results) 
 }
 
 getCharacters();